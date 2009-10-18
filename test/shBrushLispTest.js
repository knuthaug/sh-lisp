module("sh-lisp: basic");

test("Object prototype", function() {
        expect(3);
        var brush = new SyntaxHighlighter.brushes.Lisp();

        equals( typeof brush.processMatches, 'function', "Lisp brush prototype is Highlighter" );
        equals( SyntaxHighlighter.brushes.Lisp.aliases[0], 'lisp', "Has 'lisp' as alias" );        
equals( brush.regexList.length , 7, "six regexp defined" );        
        
    });

test("SyntaxHighlighter regression", function() {
        expect(1);
        var brush = new SyntaxHighlighter.brushes.Lisp();
        equals(brush.getKeywords("do one test"), '\\bdo\\b|\\bone\\b|\\btest\\b', 
               "getKeywords() splits and creates regexp string");
        
    });

test("Match comment", function() {
        expect(4);
        var brush = new SyntaxHighlighter.brushes.Lisp();
        var list = brush.findMatches(brush.regexList, ";this is a comment"); 
        equals( list[0].css, "comments", "regexp for comment at start of string");

        list = brush.findMatches(brush.regexList, "(foo) ;this is a comment"); 
        equals( list[0].css, "comments", "comment at end of string");

        list = brush.findMatches(brush.regexList, " ;this is a comment"); 
        equals( list[0].css, "comments", "space+comment");

        list = brush.findMatches(brush.regexList, " ;;;this is a comment"); 
        equals( list[0].css, "comments", "multiple comment markers");
        
    });

