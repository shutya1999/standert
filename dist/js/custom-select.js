"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var CLASS_NAME_SELECT = 'select';
var CLASS_NAME_ACTIVE = 'select_show';
var CLASS_NAME_SELECTED = 'select__option_selected';
var SELECTOR_ACTIVE = '.select_show';
var SELECTOR_DATA = '[data-select]';
var SELECTOR_DATA_TOGGLE = '[data-select="toggle"]';
var SELECTOR_OPTION_SELECTED = '.select__option_selected';
var CustomSelect = /*#__PURE__*/function () {
  function CustomSelect(target, params) {
    _classCallCheck(this, CustomSelect);
    this._elRoot = typeof target === 'string' ? document.querySelector(target) : target;
    this._params = params || {};
    if (this._params['options']) {
      this._elRoot.classList.add(CLASS_NAME_SELECT);
      this._elRoot.innerHTML = CustomSelect.template(this._params);
    }
    this._elToggle = this._elRoot.querySelector(SELECTOR_DATA_TOGGLE);
    this._elHidden = this._elRoot.querySelector('input[type=hidden]');
    this._elRoot.addEventListener('click', this._onClick.bind(this));
    if (this._params.search) this._oninput(this._elRoot, this._params);
  }
  _createClass(CustomSelect, [{
    key: "_onClick",
    value: function _onClick(e) {
      var target = e.target;
      var type = target.closest(SELECTOR_DATA).dataset.select;
      switch (type) {
        case 'toggle':
          this.toggle();
          break;
        case 'option':
          this._changeValue(target);
          break;
      }
    }
  }, {
    key: "_update",
    value: function _update(option) {
      option = option.closest('.select__option');
      var selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
      if (selected) {
        selected.classList.remove(CLASS_NAME_SELECTED);
      }
      option.classList.add(CLASS_NAME_SELECTED);
      if (this._elToggle.dataset.type === 'search') {
        this._elToggle.value = option.textContent;
        this._elHidden.value = option.dataset['value'];
      } else {
        this._elToggle.textContent = option.textContent;
        this._elToggle.value = option.dataset['value'];
        this._elRoot.classList.add('_selected');
      }
      this._elToggle.dataset.index = option.dataset['index'];
      this._elRoot.dispatchEvent(new CustomEvent('select.change'));
      this._params.onSelected ? this._params.onSelected(this, option) : null;
      return option.dataset['value'];
    }
  }, {
    key: "_reset",
    value: function _reset() {
      var selected = this._elRoot.querySelector(SELECTOR_OPTION_SELECTED);
      if (selected) {
        selected.classList.remove(CLASS_NAME_SELECTED);
      }
      this._elToggle.textContent = 'Выберите из списка';
      this._elToggle.value = '';
      this._elToggle.dataset.index = -1;
      this._elRoot.dispatchEvent(new CustomEvent('select.change'));
      this._params.onSelected ? this._params.onSelected(this, null) : null;
      return '';
    }
  }, {
    key: "_changeValue",
    value: function _changeValue(option) {
      if (option.classList.contains(CLASS_NAME_SELECTED)) {
        return;
      }
      this._update(option);
      this.hide();
    }
  }, {
    key: "_oninput",
    value: function _oninput(elem, params) {
      var _this = this;
      // console.log(params);
      this._elToggle.addEventListener('input', function () {
        var value = _this._elToggle.value.trim();
        var items = [];
        if (value !== '') {
          params.options.forEach(function (option, index) {
            var hide = '_hide',
              text = option[1];
            if (text.search(value) !== -1) {
              hide = '';
              text = _this._insertMark(text, text.search(value), value.length);
            }
            items.push("<li class=\"select__option ".concat(hide, "\" data-select=\"option\" data-value=\"").concat(option[0], "\" data-index=\"").concat(index, "\">").concat(text, "</li>"));
          });
          _this._elRoot.querySelector('.select__options').innerHTML = items.join('');
        } else {
          var _items = [];
          params.options.forEach(function (option, index) {
            _items.push("<li class=\"select__option\" data-select=\"option\" data-value=\"".concat(option[0], "\" data-index=\"").concat(index, "\">").concat(option[1], "</li>"));
          });
          _this._elRoot.querySelector('.select__options').innerHTML = _items.join('');
        }
      });
    }
  }, {
    key: "_insertMark",
    value: function _insertMark(string, pos, length) {
      return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + length) + '</mark>' + string.slice(pos + length);
    }
    // __search_draw(options){
    //
    // }
  }, {
    key: "show",
    value: function show() {
      document.querySelectorAll(SELECTOR_ACTIVE).forEach(function (select) {
        select.classList.remove(CLASS_NAME_ACTIVE);
      });
      this._elRoot.classList.add(CLASS_NAME_ACTIVE);
    }
  }, {
    key: "hide",
    value: function hide() {
      this._elRoot.classList.remove(CLASS_NAME_ACTIVE);
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this._elRoot.classList.contains(CLASS_NAME_ACTIVE)) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._elRoot.removeEventListener('click', this._onClick);
    }
  }, {
    key: "value",
    get: function get() {
      return this._elToggle.value;
    },
    set: function set(value) {
      var _this2 = this;
      var isExists = false;
      this._elRoot.querySelectorAll('.select__option').forEach(function (option) {
        if (option.dataset['value'] === value) {
          isExists = true;
          return _this2._update(option);
        }
      });
      if (!isExists) {
        return this._reset();
      }
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this._elToggle.dataset['index'];
    },
    set: function set(index) {
      var option = this._elRoot.querySelector(".select__option[data-index=\"".concat(index, "\"]"));
      if (option) {
        return this._update(option);
      }
      return this._reset();
    }
  }]);
  return CustomSelect;
}();
CustomSelect.template = function (params) {
  var name = params['name'];
  var options = params['options'];
  var targetValue = params['targetValue'];
  var select_type;
  var items = [];
  var selectedIndex = -1;
  var selectedValue = '';
  var selectedContent = 'Выберите из списка';
  var placeholder = params.placeholder !== undefined ? params.placeholder : 'Оберіть із списку або введіть';
  options.forEach(function (option, index) {
    var selectedClass = '';
    if (option[0] === targetValue) {
      selectedClass = ' select__option_selected';
      selectedIndex = index;
      selectedValue = option[0];
      selectedContent = option[1];
    }
    items.push("<li class=\"select__option".concat(selectedClass, "\" data-select=\"option\" data-value=\"").concat(option[0], "\" data-index=\"").concat(index, "\">").concat(option[1], "</li>"));
  });

  // if (params.search){
  //     let input_trigger = `<input type="text" class="select__input" value="${selectedContent}" data-select="toggle" data-type="search" data-index="${selectedIndex}">`;
  //     if (selectedValue === '') {
  //         input_trigger = `<input type="text" class="select__input" placeholder="${placeholder}" data-select="toggle" data-type="search" data-index="${selectedIndex}">`;
  //     }
  //     select_type = `
  //         <div class="select__toggle">
  //             ${input_trigger}
  //             <input type="hidden" value="${selectedValue}" name="${name}">
  //         </div>
  //     `;
  // }else {
  //     select_type = `
  //         <div class="select__toggle">
  //             <button type="button" name="${name}" value="${selectedValue}" data-type="button" data-select="toggle" data-index="${selectedIndex}">${selectedContent}</button>
  //         </div>
  //     `;
  // }

  if (params.search) {
    var input_trigger = "<input type=\"text\" class=\"select__input\" placeholder=\"".concat(placeholder, "\" value=\"").concat(selectedContent, "\" data-select=\"toggle\" data-type=\"search\" data-index=\"").concat(selectedIndex, "\">");
    if (selectedValue === '') {
      input_trigger = "<input type=\"text\" placeholder=\"".concat(placeholder, "\" class=\"select__input\" data-select=\"toggle\" data-type=\"search\" data-index=\"").concat(selectedIndex, "\">");
    }
    select_type = "\n            <div class=\"select__toggle\">\n                ".concat(input_trigger, "\n                <input type=\"hidden\" value=\"").concat(selectedValue, "\" name=\"").concat(name, "\">\n            </div>\n        ");
  } else {
    select_type = "\n            <div class=\"select__toggle\">       \n                <label>".concat(selectedContent, "</label>        \n                <button type=\"button\" name=\"").concat(name, "\" value=\"").concat(selectedValue, "\" data-type=\"button\" data-select=\"toggle\" data-index=\"").concat(selectedIndex, "\"></button>\n            </div>\n        ");
  }
  return "\n        ".concat(select_type, "\n        <div class=\"select__dropdown\">\n            <ul class=\"select__options\">").concat(items.join(''), "</ul>\n        </div>\n    ");
};
document.addEventListener('click', function (e) {
  if (!e.target.closest('.select')) {
    document.querySelectorAll(SELECTOR_ACTIVE).forEach(function (select) {
      select.classList.remove(CLASS_NAME_ACTIVE);
    });
  }
});