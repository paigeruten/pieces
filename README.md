# pieces

Count how many pieces (tokens) you need to build a given program.

## Install

    $ npm install count-pieces

## Command line usage

    $ pieces path/to/file.c
    {
     "area-comment": 168,
     "area-comment continue": 0,
     "line-comment": 0,
     "string": 71,
     "char": 45,
     "char-continue": 0,
     "directive": 32,
     "open-paren": 409,
     "close-paren": 409,
     "open-square": 123,
     "close-square": 123,
     "open-curly": 162,
     "close-curly": 162,
     "operator": 2264,
     "identifier": 2592,
     "number": 326,
     "whitespace": 2980,
     "line-continue": 5
    }

    # Or, e.g. force tokenization as javascript
    $ pieces path/to/unknown_language js
    ... output ...

## Library usage

    var pieces = require("count-pieces");
    var fs = require("fs");

    var filename = "path/to/file.c";
    var source_code = fs.readFileSync(filename, "utf-8");

    var inv = pieces.inventory(source_code, filename);
    # Or, to force the language to be C:
    var inv = pieces.inventory(source_code, "c");

## TODO

* Tweak regexes, figure out what the continues are and if we need them
* Count newlines, spaces, and tabs (which could be spaces) individually
* Count operators and keywords individually
* Pair up opening and closing tokens, like parens
* More languages
* Allow multiple input files, maybe directories

