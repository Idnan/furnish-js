# Furnish JS

Let the classes on DOM elements generate the CSS for you. 

Furnish JS is simple **lightweight**, ~2KB when minified, utility that **turns the classes applied upon the DOM elements to CSS**. So that you don't have to manually write the CSS for those minor UI enhancements like increasing the padding, adding a little margin, changing the font size, applying a border radius, pumping up the line-height a bit etc. All you have to do is specify the CSS class on an element at any point of timea i.e. either dynamically or statically, it will be *furnished*.

## How to Install?

- You can install the utility via Bower:
  ```
  bower install idnan/furnish-js
  ```
  Or directly download the repository and place the content of `dist` wherever you can access them.

- Include the `dom-funish.min.js` or `dom-furnish.js` and you are ready to use the magic of it.

## How to Use
In order to use it, all you have to specify from the set of classes in a specific format i.e. in the form of

```
[formula][value][unit] # If you donot provide the unit, `px` will be used.
```

And run 

```
// Furnish all the elements in div#some-elem
var domElem = document.getElementById('some-elem')
Funish.apply(domElem)
``` 
or if you want to run it over the whole document

```
Furnish.apply()
```

`domElem` specifies the container whose children are to be furnished, passing nothing will furnish the whole document.

For example you can specify `mt25` to apply top margin of 25px, `fs14px` to apply font size of 14 px etc. Also you can combine these formulas on an element as well for example an element may have `class="mb20 pt10 pl15 lh20"` etc.

Currently supported styles are as follows:

| Formula | CSS Property     | Example Usage                                    |
|---------|------------------|--------------------------------------------------|
| `p`     | `padding`        | `p10` will translate to `padding: 10px`          |
| `pt`    | `padding-top`    | `pt20` will translate to `padding-top: 20px;`    |
| `pb`    | `padding-bottom` | `pb10` will translate to `padding-bottom: 10px;` |
| `pr`    | `padding-right`  | `pr20` will translate to `padding-right: 20px;`  |
| `pl`    | `padding-left`   | `pl23` will translate to `padding-left: 23px;`   |
| `m`     | `margin`         | `m20` will translate to `margin: 20px`           |
| `mt`    | `margin-top`     | `mt20` will translate to `margin-top: 20px;`     |
| `mb`    | `margin-bottom`  | `mb20` will translate to `margin-bottom: 20px;`  |
| `ml`    | `margin-left`    | `ml50` will translate to `margin-left: 50px;`    |
| `mr`    | `margin-right`   | `mr30` will translate to `margin-right: 30px;`   |
| `w`     | `width`          | `w200` will translate to `width: 200px`          |
| `h`     | `height`         | `h60` will translate to `height: 60px;`          |
| `br`    | `border-radius`  | `br5` will translate to `border-radius: 5px;`    |
| `fs`    | `font-size`      | `fs15` will translate to `font-size: 15px`       |
| `fw`    | `font-weight`    | `fw400` will translate to `font-weight: 400px`   |
| `lh`    | `line-height`    | `lh20em` will translate to `line-height: 20em`   |
| `t`     | `top`            | `t6` will translate to `top: 6px;`               |
| `l`     | `left`           | `l30` will translate to `left: 30px`             |
| `b`     | `bottom`         | `b20em` will translate to `bottom: 20em;`        |
| `r`     | `right`          | `r20em` will translate to `right: 20em;`         |


## Quick Usage Examples

Let's say that you have a heading and you want to apply bottom margin of `10px`, you will do

```
<h1 class="mb10">Furnish JS</h1>
<p>Turn your classes to CSS</p>
```

Changing the font size to `15px`
```
<p class="fs14px mt25 mb0 ml2em br30%">You can combine formulas as well</p>
```

## Contributing

You can contribute to this project by 

- Adding the support for other CSS attributes. (Fork it, add your feature, create the pull request)
- Pointing out any bugs or issues
