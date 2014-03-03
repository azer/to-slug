var toSlugCase = require("to-slug-case");
var anglicize = require("anglicize");

module.exports = slug;

function slug (input) {
  return toSlugCase(anglicize(input));
}
