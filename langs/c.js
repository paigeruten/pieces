exports.name = "c";
exports.exts = ["c", "h"];
exports.rules = [
  { type: 'area-comment', regex: /^\/\*([^*]|\*(?!\/))*\*\/$/ },
  { type: 'area-comment continue', regex: /^\/\*([^*]|\*(?!\/))*\*?$/ },
  { type: 'line-comment', regex: /^\/\/[^\n]*$/ },
  { type: 'string',       regex: /^"([^"\n]|\\")*"?$/ },
  { type: 'char',         regex: /^'(\\?[^'\n]|\\')'?$/ },
  { type: 'char-continue', regex: /^'[^']*$/ },
  { type: 'directive',    regex: /^#(\S*)$/ },
  { type: 'open-paren',   regex: /^\($/ },
  { type: 'close-paren',  regex: /^\)$/ },
  { type: 'open-square',  regex: /^\[$/ },
  { type: 'close-square', regex: /^\]$/ },
  { type: 'open-curly',   regex: /^{$/ },
  { type: 'close-curly',  regex: /^}$/ },
  { type: 'operator',     regex: /^([-<>~!%^&*\/+=?|.,:;]|->|<<|>>|\*\*|\|\||&&|--|\+\+|[-+*|&%\/=]=)$/ },
  { type: 'identifier',   regex: /^([_A-Za-z]\w*)$/ },
  { type: 'number',       regex: /^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/ },
  { type: 'whitespace',   regex: /^(\s+)$/ },
  { type: 'line-continue', regex: /^\\\n?$/ }
];

