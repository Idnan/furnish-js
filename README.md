# inline-style.js
Generate inline style with javascript
-------

Just add the magic classes to elements in real or render time

Some formulas:
```html
<!-- Set margin-top of 25px -->
<div class="mt25"></div>
```
```html
<!-- Set font-size to 14pt -->
<div class="fs14pt">hello!</div>
```
```html
<!-- Combine formulas (its the same to add 
     font-size:14pt; margin-top:25px; margin-bottom:0; 
     margin-left:2em; border-radius:30%)
-->
<div class="fs14pt mt25 mb0 ml2em br30%">hello!</div>
```

-------
```js
// usage
var container = window.document.getElementById('container');
InlineStyle.apply(container);
```