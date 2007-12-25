require("bindings/default/global.js");

var browser_buffer_normal_keymap = new keymap($parent = default_global_keymap);

// scroll keys
define_key(browser_buffer_normal_keymap, "back_space", "cmd_scrollPageUp");
define_key(browser_buffer_normal_keymap, "space","cmd_scrollPageDown");
define_key(browser_buffer_normal_keymap, "M-v","cmd_scrollPageUp");
define_key(browser_buffer_normal_keymap, "C-v","cmd_scrollPageDown");
define_key(browser_buffer_normal_keymap, "page_up","cmd_scrollPageUp");
define_key(browser_buffer_normal_keymap, "page_down","cmd_scrollPageDown");
define_key(browser_buffer_normal_keymap, "C-p","cmd_scrollLineUp");
define_key(browser_buffer_normal_keymap, "C-n","cmd_scrollLineDown");

define_key(browser_buffer_normal_keymap, "up","cmd_scrollLineUp");
define_key(browser_buffer_normal_keymap, "down","cmd_scrollLineDown");
define_key(browser_buffer_normal_keymap, "left","cmd_scrollLeft");
define_key(browser_buffer_normal_keymap, "right","cmd_scrollRight");

define_key(browser_buffer_normal_keymap, "C-b","cmd_scrollLeft");
define_key(browser_buffer_normal_keymap, "C-f","cmd_scrollRight");
define_key(browser_buffer_normal_keymap, "C-a","beginning-of-line");
define_key(browser_buffer_normal_keymap, "C-e","end-of-line");
define_key(browser_buffer_normal_keymap, "M-S-comma","cmd_scrollTop");
define_key(browser_buffer_normal_keymap, "M-S-period","cmd_scrollBottom");

// Selection
define_key(browser_buffer_normal_keymap, "M-w","cmd_copy");
define_key(browser_buffer_normal_keymap, "S-page_up", "cmd_selectPageUp");
define_key(browser_buffer_normal_keymap, "S-page_down", "cmd_selectPageDown");
define_key(browser_buffer_normal_keymap, "C-delete", "cmd_copy");
define_key(browser_buffer_normal_keymap, "C-insert", "cmd_copy");
define_key(browser_buffer_normal_keymap, "C-S-home", "cmd_selectTop");
define_key(browser_buffer_normal_keymap, "C-S-end", "cmd_selectBottom");
define_key(browser_buffer_normal_keymap, "C-S-left", "cmd_selectWordPrevious");
define_key(browser_buffer_normal_keymap, "C-S-right", "cmd_selectWordNext");
define_key(browser_buffer_normal_keymap, "S-left", "cmd_selectCharPrevious");
define_key(browser_buffer_normal_keymap, "S-right", "cmd_selectCharNext");
define_key(browser_buffer_normal_keymap, "S-home", "cmd_selectBeginLine");
define_key(browser_buffer_normal_keymap, "S-end", "cmd_selectEndLine");
define_key(browser_buffer_normal_keymap, "S-up", "cmd_selectLinePrevious");
define_key(browser_buffer_normal_keymap, "S-down", "cmd_selectLineNext");

// URL
define_key(browser_buffer_normal_keymap, "C-x C-f", "find-url"); 
define_key(browser_buffer_normal_keymap, "u", "go-up");
define_key(browser_buffer_normal_keymap, "B", "go-back");
define_key(browser_buffer_normal_keymap, "F", "go-forward");
define_key(browser_buffer_normal_keymap, "l", "go-back");
define_key(browser_buffer_normal_keymap, "g", "open-url");


// I-search
define_key(browser_buffer_normal_keymap, "C-s", "isearch-forward");
define_key(browser_buffer_normal_keymap, "C-r", "isearch-backward");

define_key(browser_buffer_normal_keymap, "C-g", "keyboard-quit");


define_key(browser_buffer_normal_keymap, "C-return", "follow-link-in-new-buffer");

define_key(browser_buffer_normal_keymap, "escape", "unfocus");

define_key(browser_buffer_normal_keymap, "C-q", "browser-buffer-quote-next-input-mode");
define_key(browser_buffer_normal_keymap, "C-M-q", "browser-buffer-quote-input-mode");