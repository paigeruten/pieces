var tokenizer = require("tokenizer-array");

var langs = {};
var lang_codes = ["c"];
lang_codes.forEach(function (lang) {
  langs[lang] = require("./langs/" + lang + ".js");
});

var langFor = function(lang_or_name) {
  var lang_code = lang_codes.find(function(lang_code) {
    return lang_code === lang_or_name;
  });
  if (lang_code) return langs[lang_code];

  lang_code = lang_codes.find(function(lang_code) {
    return langs[lang_code].exts.find(function(ext) {
      return lang_or_name.endsWith("." + ext);
    });
  });
  if (lang_code) return langs[lang_code];

  return null;
};

exports.inventory = function(src, lang_or_name) {
  var lang = langFor(lang_or_name);
  if (!lang) return null;

  var rules = lang.rules;
  var tokens = tokenizer(src, rules);
  var inv = {};
  rules.forEach(function (rule) {
    inv[rule.type] = 0;
  });
  tokens.forEach(function (token) {
    inv[token.type]++;
  });
  return inv;
};

