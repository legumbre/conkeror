/**
 * (C) Copyright 2004-2007 Shawn Betts
 * (C) Copyright 2007-2009 John J. Foerch
 * (C) Copyright 2007-2008 Jeremy Maitin-Shepard
 *
 * Use, modification, and distribution are subject to the terms specified in the
 * COPYING file.
**/

/**
 * trim_whitespace removes whitespace from the beginning and end of the
 * given string.
 */
function trim_whitespace (str) {
    return (new String(str)).replace(/^\s+|\s+$/g, "");
}


function shell_quote (str) {
    var s = str.replace("\"", "\\\"", "g");
    s = s.replace("$", "\$", "g");
    return s;
}


/**
 * Like perl's quotemeta. Backslash all non-alphanumerics.
 */
function quotemeta (str) {
    return str.replace(/([^a-zA-Z0-9])/g, "\\$1");
}


/**
 * Given a list of choices (strings), return a regexp which matches any
 * of them
 */
function choice_regexp (choices) {
    return ("(?:" + choices.map(quotemeta).join("|") + ")");
}


/**
 * get_shortdoc_string, given a docstring, returns the portion of the
 * docstring up to the first newline, or the whole docstring.
 */
function get_shortdoc_string (doc) {
    var shortdoc = null;
    if (doc != null) {
        var idx = doc.indexOf("\n");
        if (idx >= 0)
            shortdoc = doc.substring(0,idx);
        else
            shortdoc = doc;
    }
    return shortdoc;
}


/**
 * string_format takes a format-string containing %X style format codes,
 * and an object mapping the code-letters to replacement text.  It
 * returns a string with the formatting codes replaced by the replacement
 * text.
 */
function string_format (spec, substitutions) {
    return spec.replace(/%(.)/g, function (a, b) substitutions[b]);
}


/**
 * html_escape replaces characters which are special in html with character
 * entities, safe for inserting as text into an html document.
 */
function html_escape (str) {
    return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace('"', '&quot;', 'g');
}


/**
 * get_spaces returns a string of n spaces.
 */
function get_spaces (n) {
    var x = "";
    while (x.length < n) x += " ";
    return x;
}


/**
 * word_wrap wraps str to line_length.
 */
function word_wrap (str, line_length, line_prefix_first, line_prefix) {
    if (line_prefix === undefined)
        line_prefix = line_prefix_first;
    else if (line_prefix.length < line_prefix_first.length) {
        line_prefix += get_spaces(line_prefix_first.length - line_prefix.length);
    }

    line_length -= line_prefix_first.length;

    if (line_length < 1)
        line_length = 1;

    let cur_prefix = line_prefix_first;

    var out = "";
    while (line_length < str.length) {
        let i = str.lastIndexOf(" ", line_length);
        if (i == -1)
            i = str.indexOf(" ", line_length);
        if (i == -1) {
            out += cur_prefix + str + "\n";
            str = "";
        }
        else  {
            out += cur_prefix + str.substr(0, i) + "\n";
            while (i < str.length && str.charAt(i) ==  " ")
                ++i;
            str = str.substr(i);
        }
        cur_prefix = line_prefix;
    }
    if (str.length > 0)
        out += cur_prefix + str + "\n";
    return out;
}


/**
 * or_string joins an array of strings on commas, except for the last
 * pair, which it joins with the word "or".
 */
function or_string (options) {
    return options.slice(0,options.length-1)
        .join(", ") + " or " + options[options.length - 1];
}


/**
 * build_url_regexp builds a regular expression to match URLs for a given
 * web site.
 *
 * Both the $domain and $path arguments can be either regexps, in
 * which case they will be matched as is, or strings, in which case
 * they will be matched literally.
 *
 * $tlds specifies a list of valid top-level-domains to match, and
 * defaults to .com. Useful for when e.g. foo.org and foo.com are the
 * same.
 *
 * If $allow_www is true, www.domain.tld will also be allowed.
 */
define_keywords("$domain", "$path", "$tlds", "$allow_www");
function build_url_regexp () {
    function regexp_to_string (obj) {
        if (typeof obj == "object" && "source" in obj)
            return obj.source;
        return quotemeta(obj);
    }

    keywords(arguments, $path = "", $tlds = ["com"], $allow_www = false);
    var domain = regexp_to_string(arguments.$domain);
    if (arguments.$allow_www) {
        domain = "(?:www\.)?" + domain;
    }
    var path = regexp_to_string(arguments.$path);
    var tlds = arguments.$tlds;
    var regexp = "^https?://" + domain + "\\." + choice_regexp(tlds) + "/" + path;
    return new RegExp(regexp);
}


provide("string");
