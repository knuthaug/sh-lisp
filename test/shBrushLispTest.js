module("sh-lisp: basic");

test("Object prototype", function() {
        expect(3);
        var brush = new SyntaxHighlighter.brushes.Lisp();

        equals( typeof brush.processMatches, 'function', "Lisp brush prototype is Highlighter" );
        equals( SyntaxHighlighter.brushes.Lisp.aliases[0], 'lisp', "Has 'lisp' as alias" );        
        equals( brush.regexList.length , 1, "one regexp defined" );        
        
    });

test("SyntaxHighlighter regression", function() {
        expect(1);
        var brush = new SyntaxHighlighter.brushes.Lisp();
        equals(brush.getKeywords("do one test"), '\\bdo\\b|\\bone\\b|\\btest\\b', 
               "getKeywords() splits and creates regexp string");
        
    });

test("Match comment", function() {
        expect(2);
        var brush = new SyntaxHighlighter.brushes.Lisp();
        var test = ";this is a comment";
        var list = brush.findMatches(brush.regexList, test); 
        equals( list[0].css, "comments", "regexp for comment matches");
        equals( list[0].length, test.length, "regexp for comment matches string length");
        
    });

