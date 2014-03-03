var slug = require("./");

it('anglicizes and slugifies', function(){
  expect(slug('hüseyin MAHİR Ulaş')).to.equal('huseyin-mahir-ulas');
  expect(slug('ÂÇİĞÖŞÜÑ+âçığöşüñ')).to.equal('acigosun-acigosun');
});
