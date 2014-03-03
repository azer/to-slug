## to-slug

Turn given text to slug. Combines [anglicize](http://github.com/azer/anglicize) and [to-slug-case](http://github.com/ianstormtaylor/to-slug-case).

```js
toSlug = require('to-slug')

toSlug("Hüseyin MAHİR Ulaş")
// => huseyin-mahir-ulas

toSlug("ÂÇİĞÖŞÜÑ+âçığöşüñ")
// => acigosun-acigosun

toSlug("çı ğ öş ü αβ. ΏΔπ")
// => span-c-ig-os-u-ab-wdp
```

## INSTALL

```bash
$ npm install to-slug
```
