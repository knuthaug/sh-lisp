SyntaxHighlighter.brushes.Lisp = function(){

    var funcs     = 'lambda progn dolist mapcar car cdr';
    var keywords  = 'defun let while when unless cond if t nil defvar dotimes with-temp-buffer';
    var operators = '> < = * / %';

    this.regexList = [
                      { regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
                { regex: new RegExp('&\\w+;', 'g'),			css: 'plain' },
                { regex: new RegExp(';.*', 'g'),			css: 'comments' },
                { regex: new RegExp("'(\\w|-)+", 'g'),			css: 'variable' },
                { regex: new RegExp(this.getKeywords(keywords), 'gm'),	css: 'keyword' },
                { regex: new RegExp(this.getKeywords(funcs), 'gm'),	css: 'functions' },
             ];
    
}

SyntaxHighlighter.brushes.Lisp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Lisp.aliases   = ['lisp'];
