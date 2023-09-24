"use strict";

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
    console.log('mobile');
    return false;
  }
  if (breakpoint_tablet.matches === true) {
    console.log('tablet');
    return false;
  }
  if (breakpoint_laptop.matches === true) {
    console.log('laptop');
    return false;
  }
  if (breakpoint_desktop.matches === true) {
    console.log('desktop');
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
    model1 = new CustomSelect('#model-1', {
      name: 'model-1',
      placeholder: '',
      targetValue: modelData[0][0],
      options: modelData,
      onSelected: function onSelected(select, option) {
        generateTable();
      }
    });
    model2 = new CustomSelect('#model-2', {
      name: 'model-2',
      placeholder: '',
      targetValue: modelData[1][0],
      options: modelData,
      onSelected: function onSelected(select, option) {
        generateTable();
      }
    });
  }
  function initSizeSelect(sizes) {
    var sizesData = [];
    sizes.forEach(function (size) {
      sizesData.push([size, size]);
    });
    size1 = new CustomSelect('#size-1', {
      name: 'size-1',
      placeholder: '',
      targetValue: sizesData[0][0],
      options: sizesData,
      onSelected: function onSelected(select, option) {
        generateTable();
      }
    });
    size2 = new CustomSelect('#size-2', {
      name: 'size-2',
      placeholder: '',
      targetValue: sizesData[0][0],
      options: sizesData,
      onSelected: function onSelected(select, option) {
        generateTable();
      }
    });
  }

  // Get Google Sheet data
  var tableData = [];
  fetch("https://script.google.com/macros/s/AKfycbwO804MBRnqZngk8zF1W35at11Ah_Bg7dNU-yE_Hsa8m8G6-y42kl9yg0dL8oCgIYfF8A/exec").then(function (response) {
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
            t['params'][size][param[0]] = param[index + 1];
          }
        });
      });
      tableData.push(t);
    });
    initModelsSelect(productsName);
    initSizeSelect(frame_size);
    generateTable();
  })["catch"](function (error) {
    return console.log('error', error);
  });
  function generateTable() {
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