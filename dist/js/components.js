"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// Custom VH
var vh = window.innerHeight * 0.01;
var vw = document.documentElement.clientWidth;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
document.documentElement.style.setProperty('--vw', "".concat(vw, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  var vw = document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--vw', "".concat(vw, "px"));
});

// Remove class
function removeClass(nodes, className) {
  nodes.forEach(function (node) {
    node.classList.remove(className);
  });
}
function addClass(nodes, className) {
  nodes.forEach(function (node) {
    node.classList.add(className);
  });
}

// Breakpoints checker, прослуховувач медіазапитів
var breakpoint_mob = window.matchMedia('(max-width:767px)'); // 0 - 767
var breakpoint_tablet = window.matchMedia('(max-width:1023px)'); // 767 - 1023
var breakpoint_laptop = window.matchMedia('(max-width:1339px)'); // 1024 - 1279
var breakpoint_desktop = window.matchMedia('(min-width:1440px)'); // 1279 >
var breakpointChecker = function breakpointChecker() {
  if (breakpoint_mob.matches === true) {
    // console.log('mobile');
    return false;
  }
  if (breakpoint_tablet.matches === true) {
    // console.log('tablet');
    return false;
  }
  if (breakpoint_laptop.matches === true) {
    // console.log('laptop');
    return false;
  }
  if (breakpoint_desktop.matches === true) {
    // console.log('desktop');
    return false;
  }
};
breakpoint_mob.addEventListener('change', breakpointChecker);
breakpoint_tablet.addEventListener('change', breakpointChecker);
breakpoint_laptop.addEventListener('change', breakpointChecker);
breakpoint_desktop.addEventListener('change', breakpointChecker);
breakpointChecker();
var btns_anchor = document.querySelectorAll('._js-anchor');
btns_anchor.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var href = btn.dataset.anchor;
    var target = document.querySelector("#".concat(href));
    var topOffset = target.offsetTop - document.querySelector('nav').clientHeight - 20;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth"
    });
    if (btn.closest('.nav') && btn.closest('.nav').classList.contains('active')) {
      btn.closest('.nav').classList.remove('active');
    }
  });
});
if (document.querySelector('._js-scroll-top')) {
  document.querySelector('._js-scroll-top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Comparison
window.addEventListener("load", function () {
  var comparison_rows_sidebar = document.querySelectorAll('._js-comparison-sidebar-row');
  var comparison_rows_main = document.querySelectorAll('._js-comparison-row');
  if (comparison_rows_sidebar.length) {
    comparison_rows_sidebar.forEach(function (row_sidebar) {
      var id = row_sidebar.dataset.id;
      var comparison_row_main = document.querySelector("._js-comparison-row[data-id=\"".concat(id, "\"]"));
      var row_sidebar_height = row_sidebar.clientHeight;
      if (comparison_row_main.getBoundingClientRect().height > row_sidebar_height) {
        row_sidebar_height = comparison_row_main.getBoundingClientRect().height;
      }
      row_sidebar.style.setProperty('--height', "".concat(row_sidebar_height, "px"));
      comparison_row_main.style.setProperty('--height', "".concat(row_sidebar_height, "px"));
      if (row_sidebar.closest('.comparison-body') && !row_sidebar.classList.contains('sidebar-title')) {
        row_sidebar.addEventListener('mouseenter', function () {
          row_sidebar.classList.add('hovered');
          comparison_row_main.classList.add('hovered');
        });
        row_sidebar.addEventListener('mouseleave', function () {
          removeClass(comparison_rows_sidebar, 'hovered');
          removeClass(comparison_rows_main, 'hovered');
        });
      }
    });
    comparison_rows_main.forEach(function (row_main) {
      var id = row_main.dataset.id;
      var row_sidebar = document.querySelector("._js-comparison-sidebar-row[data-id=\"".concat(id, "\"]"));
      if (row_main.closest('.comparison-body') && !row_sidebar.classList.contains('sidebar-title')) {
        row_main.addEventListener('mouseenter', function () {
          row_main.classList.add('hovered');
          row_sidebar.classList.add('hovered');
        });
        row_main.addEventListener('mouseleave', function () {
          removeClass(comparison_rows_sidebar, 'hovered');
          removeClass(comparison_rows_main, 'hovered');
        });
      }
    });
  }

  // Select
  var selects = document.querySelectorAll('.js-select');
  if (selects.length) {
    selects.forEach(function (select) {
      new CustomSelect(select, {});
    });
  }
  var model1, model2, size1, size2;
  function initModelsSelect(models) {
    var modelData = [];
    models.forEach(function (model, index) {
      modelData.push([index, model]);
    });
    if (model1 === undefined) {
      model1 = new CustomSelect('#model-1', {
        name: 'model-1',
        placeholder: '',
        targetValue: modelData[0][0],
        options: modelData,
        onSelected: function onSelected(select, option) {
          generateTable();
        }
      });
    } else {
      model1.option = modelData;
      model1.value = modelData[0][0];
    }
    if (model2 === undefined) {
      model2 = new CustomSelect('#model-2', {
        name: 'model-2',
        placeholder: '',
        targetValue: modelData[1][0],
        options: modelData,
        onSelected: function onSelected(select, option) {
          generateTable();
        }
      });
    } else {
      model2.option = modelData;
      model2.value = modelData[1][0];
    }
  }
  function initSizeSelect(sizes) {
    var sizesData = [];
    sizes.forEach(function (size) {
      sizesData.push([size, size]);
    });
    if (size1 === undefined) {
      size1 = new CustomSelect('#size-1', {
        name: 'size-1',
        placeholder: '',
        targetValue: sizesData[0][0],
        options: sizesData,
        onSelected: function onSelected(select, option) {
          generateTable();
        }
      });
    } else {
      size1.option = sizesData;
      size1.value = sizesData[0][0];
    }
    if (size2 === undefined) {
      size2 = new CustomSelect('#size-2', {
        name: 'size-2',
        placeholder: '',
        targetValue: sizesData[0][0],
        options: sizesData,
        onSelected: function onSelected(select, option) {
          generateTable();
        }
      });
    } else {
      size2.option = sizesData;
      size2.value = sizesData[0][0];
    }
  }

  // Get Google Sheet data
  var tableData = [];
  if (localStorage.getItem('table') && localStorage.getItem('table') !== "") {
    tableData = JSON.parse(localStorage.getItem('table'));
    var productsName = [];
    tableData.forEach(function (item) {
      productsName.push(item['name']);
    });
    initModelsSelect(productsName);
    initSizeSelect(tableData[0]['frame_size']);
    generateTable();

    // Validation localstorage data and google sheets data
    tableData = [];
    requestData().then(function (res) {
      var googleData = res.tableData;
      if (JSON.stringify(googleData) !== localStorage.getItem('table')) {
        // console.log('!=');
        initModelsSelect(res.productsName);
        initSizeSelect(res.frame_size);
        generateTable();
        localStorage.setItem('table', JSON.stringify(tableData));
      } else {
        // console.log('==')
      }
    });
  } else {
    requestData().then(function (res) {
      initModelsSelect(res.productsName);
      initSizeSelect(res.frame_size);
      generateTable();
      localStorage.setItem('table', JSON.stringify(tableData));
    });
  }
  function requestData() {
    return _requestData.apply(this, arguments);
  }
  function _requestData() {
    _requestData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var res;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            res = {};
            _context.next = 3;
            return fetch("https://script.google.com/macros/s/AKfycbyzvMgfs4tEvkKJ3hiW3z2KHosatQcNL0byIvmnKQA_Sz3O1KtNxQp3FqV87sY0da18Dg/exec").then(function (response) {
              return response.json();
            }).then(function (result) {
              var productsName = [];
              var frame_size = [];
              result.forEach(function (item) {
                var params = item['data'];
                frame_size = getParamsByName('Frame size', item.data);
                productsName.push(item['sheetName']);
                var t = {};
                t['name'] = item['sheetName'];
                t['frame_size'] = frame_size;
                t['params'] = {};
                frame_size.forEach(function (size, index) {
                  t['params'][size] = {};
                  params.forEach(function (param) {
                    if (param[0].trim() !== '') {
                      t['params'][size][param[0]] = String(param[index + 1]);
                    }
                  });
                });
                tableData.push(t);
              });
              console.log(tableData);
              // localStorage.setItem('table', JSON.stringify(tableData));

              res = {
                tableData: tableData,
                productsName: productsName,
                frame_size: frame_size
              };
            })["catch"](function (error) {
              return console.log('error', error);
            });
          case 3:
            return _context.abrupt("return", res);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _requestData.apply(this, arguments);
  }
  function generateTable() {
    // console.log(tableData);
    var paramsName = ['Specs', 'Weight', 'Frame', 'Headset', 'Bottom Bracket', 'Max. Tire Clearance', 'Max. system weight', 'Geometry', 'Seat tube length', 'Top tube length', 'Head tube length', 'Seat tube length', 'Stack', 'Reach', 'Chainstay length', 'Wheelbase', 'Standover height', 'Crankset', 'Stem', 'Handlebar', 'Seatpost'];
    var modelName_1 = +model1.value;
    var modelName_2 = +model2.value;
    var modelSize_1 = +size1.value;
    var modelSize_2 = +size2.value;
    var params_product_1 = tableData[modelName_1].params[modelSize_1];
    var params_product_2 = tableData[modelName_2].params[modelSize_2];
    var rows_html = document.querySelectorAll('.comparison-body .comparison-main .row');
    paramsName.forEach(function (paramName, index) {
      var row_html = rows_html[index];
      if (params_product_1[paramName] !== undefined) {
        row_html.innerHTML = "\n                    <div class=\"col\">\n                        <p class=\"text\">".concat(params_product_1[paramName], "</p>\n                    </div>\n                    <div class=\"col\">\n                        <p class=\"text\">").concat(params_product_2[paramName], "</p>\n                    </div>\n                ");
      }
    });

    // Set btns link/text
    var btn1 = rows_html[rows_html.length - 1].querySelector('.col:nth-child(1) .btn-primary');
    var btn2 = rows_html[rows_html.length - 1].querySelector('.col:nth-child(2) .btn-primary');
    btn1.innerHTML = tableData[modelName_1]['name'];
    btn1.href = params_product_1['Product page URL'];
    btn2.innerHTML = tableData[modelName_2]['name'];
    btn2.href = params_product_1['Product page URL'];

    // Set image
    var img1 = document.querySelector('.comparison-header .comparison-main .row:nth-child(3) .col:nth-child(1) img');
    img1.src = params_product_1['Image URL'];
    var img2 = document.querySelector('.comparison-header .comparison-main .row:nth-child(3) .col:nth-child(2) img');
    img2.src = params_product_2['Image URL'];
  }
  function getParamsByName(name, data) {
    var copy = JSON.parse(JSON.stringify(data));
    for (var i = 0; i < copy.length; i++) {
      if (copy[i][0] === name) {
        copy[i].shift();
        return copy[i];
      }
    }
    return [];
  }
});