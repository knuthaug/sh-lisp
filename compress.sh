#!/bin/bash

cd scripts;
yui="java -jar ../yuicompressor-2.4.2.jar --nomunge -o tmp"


for name in shCore.js shBrushCSharp.js shBrushCss.js shBrushBash.js shBrushDiff.js shBrushJava.js shBrushPerl.js shBrushPhp.js shBrushPlain.js shBrushPython.js shBrushRuby.js shBrushSql.js shBrushXml.js shBrushYaml.js
do 
    $yui --type js $name 
    cat tmp >> sh.js
    rm tmp 
done

cd ..
mv scripts/sh.js sh.js

cd styles;

for name in shCore.css shThemeDefault.css
do 
    $yui --type css $name 
    cat tmp >> sh.css
    rm tmp 
done

cd ..
mv styles/sh.css sh.css
