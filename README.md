<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Student's t][t-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] (CDF) for a [t distribution][t-distribution] random variable is

<!-- <equation class="equation" label="eq:t_cdf" align="center" raw="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" alt="Cumulative distribution function (CDF) for a Student's t distribution."> -->

```math
F(x;\nu) = 1 - \frac{1}{2} \frac{\mathop{\mathrm{Beta}}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\mathop{\mathrm{Beta}}(\tfrac{\nu}{2}, \tfrac{1}{2})}
```

<!-- <div class="equation" align="center" data-raw-text="F(x;\nu) = 1 - \frac{1}{2} \frac{\operatorname{Beta}(\tfrac{\nu}{\nu + x^2};\,\tfrac{\nu}{2},\tfrac{1}{2})}{\operatorname{Beta}(\tfrac{\nu}{2}, \tfrac{1}{2})}" data-equation="eq:t_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/t/logcdf/docs/img/equation_t_cdf.svg" alt="Cumulative distribution function (CDF) for a Student's t distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `v > 0` is the degrees of freedom. In the definition, `Beta( x; a, b )` denotes the lower incomplete beta function and `Beta( a, b )` the [beta function][beta-function].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
logcdf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-logcdf@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var logcdf = require( 'path/to/vendor/umd/stats-base-dists-t-logcdf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-logcdf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.logcdf;
})();
</script>
```

#### logcdf( x, v )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var y = logcdf( 2.0, 0.1 );
// returns ~-0.493

y = logcdf( 1.0, 2.0 );
// returns ~-0.237

y = logcdf( -1.0, 4.0 );
// returns ~-1.677
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN );
// returns NaN
```

If provided `v <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.0 );
// returns NaN
```

#### logcdf.factory( v )

Returns a `function` for evaluating the natural logarithm of the [CDF][cdf] of a [Student's t][t-distribution] distribution with degrees of freedom `v`.

```javascript
var mylogcdf = logcdf.factory( 0.5 );
var y = mylogcdf( 3.0 );
// returns ~-0.203

y = mylogcdf( 1.0 );
// returns ~-0.358
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-t-logcdf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var v;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = (randu() * 6.0) - 3.0;
    v = randu() * 10.0;
    y = logcdf( x, v );
    console.log( 'x: %d, v: %d, ln(F(x;v)): %d', x.toFixed( 4 ), v.toFixed( 4 ), y.toFixed( 4 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-t-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-t-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-t-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-t-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-t-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-t-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-t-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-t-logcdf/main/LICENSE

[beta-function]: https://en.wikipedia.org/wiki/Beta_function

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[t-distribution]: https://en.wikipedia.org/wiki/Student%27s_t-distribution

</section>

<!-- /.links -->
