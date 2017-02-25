#!/usr/bin/env node

var fs = require("fs");
var pieces = require("count-pieces");

var infile = process.argv[2];
var lang_or_name = infile;
if (process.argv[3]) lang_or_name = process.argv[3];

fs.readFile(infile, "utf8", function (err, src) {
  if (err) {
    return console.log(err);
  }
  var inv = pieces.inventory(src, lang_or_name);
  console.log(JSON.stringify(inv, null, ' '));
});

