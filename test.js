var test = require("prova");
var slug = require("./");

test('anglicizes and slugifies', function (t) {
  t.plan(2);
  t.equal(slug('hüseyin MAHİR Ulaş'), 'huseyin-mahir-ulas');
  t.equal(slug('ÂÇİĞÖŞÜÑ+âçığöşüñ'), 'acigosun-acigosun');
});
