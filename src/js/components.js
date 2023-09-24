// Custom VH
let vh = window.innerHeight * 0.01;
let vw = document.documentElement.clientWidth;

document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    let vw = document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
});

// Remove class
function removeClass(nodes, className) {
    nodes.forEach(node => {
        node.classList.remove(className);
    })
}

function addClass(nodes, className) {
    nodes.forEach(node => {
        node.classList.add(className);
    })
}

// Breakpoints checker, прослуховувач медіазапитів
const breakpoint_mob = window.matchMedia('(max-width:767px)'); // 0 - 767
const breakpoint_tablet = window.matchMedia('(max-width:1023px)'); // 767 - 1023
const breakpoint_laptop = window.matchMedia('(max-width:1339px)'); // 1024 - 1279
const breakpoint_desktop = window.matchMedia('(min-width:1440px)'); // 1279 >
const breakpointChecker = function () {
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

let btns_anchor = document.querySelectorAll('._js-anchor');
btns_anchor.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        let href = btn.dataset.anchor;
        const target = document.querySelector(`#${href}`);

        const topOffset = target.offsetTop - document.querySelector('nav').clientHeight - 20;
        window.scrollTo({
            top: topOffset,
            behavior: "smooth"
        });

        if (btn.closest('.nav') && btn.closest('.nav').classList.contains('active')) {
            btn.closest('.nav').classList.remove('active');
        }
    })
})

if (document.querySelector('._js-scroll-top')) {
    document.querySelector('._js-scroll-top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

// Comparison
window.addEventListener("load", () => {
    const comparison_rows_sidebar = document.querySelectorAll('._js-comparison-sidebar-row');
    const comparison_rows_main = document.querySelectorAll('._js-comparison-row');

    if (comparison_rows_sidebar.length){
        comparison_rows_sidebar.forEach(row_sidebar => {
            const id = row_sidebar.dataset.id;
            const comparison_row_main = document.querySelector(`._js-comparison-row[data-id="${id}"]`);
            let row_sidebar_height = row_sidebar.clientHeight;

            if (comparison_row_main.getBoundingClientRect().height > row_sidebar_height){
                row_sidebar_height = comparison_row_main.getBoundingClientRect().height;
            }
            row_sidebar.style.setProperty('--height', `${row_sidebar_height}px`);
            comparison_row_main.style.setProperty('--height', `${row_sidebar_height}px`);

            if (row_sidebar.closest('.comparison-body') && !row_sidebar.classList.contains('sidebar-title')){
                row_sidebar.addEventListener('mouseenter', () => {
                    row_sidebar.classList.add('hovered');
                    comparison_row_main.classList.add('hovered');
                })
                row_sidebar.addEventListener('mouseleave', () => {
                    removeClass(comparison_rows_sidebar, 'hovered');
                    removeClass(comparison_rows_main, 'hovered');
                })
            }
        })

        comparison_rows_main.forEach(row_main => {
            const id = row_main.dataset.id;
            const row_sidebar = document.querySelector(`._js-comparison-sidebar-row[data-id="${id}"]`);

            if (row_main.closest('.comparison-body') && !row_sidebar.classList.contains('sidebar-title')){
                row_main.addEventListener('mouseenter', () => {
                    row_main.classList.add('hovered');
                    row_sidebar.classList.add('hovered');
                })
                row_main.addEventListener('mouseleave', () => {
                    removeClass(comparison_rows_sidebar, 'hovered');
                    removeClass(comparison_rows_main, 'hovered');
                })
            }
        })
    }

    // Select
    const selects = document.querySelectorAll('.js-select');

    if (selects.length){
        selects.forEach(select => {
            new CustomSelect(select, {});
        })
    }

    let model1, model2, size1, size2;
    function initModelsSelect(models){
        let modelData = [];
        models.forEach((model, index) => {
            modelData.push([index, model]);
        })

        model1 = new CustomSelect('#model-1', {
            name: 'model-1',
            placeholder: '',
            targetValue: modelData[0][0],
            options: modelData,
            onSelected(select, option) {
                generateTable();
            }
        })

        model2 = new CustomSelect('#model-2', {
            name: 'model-2',
            placeholder: '',
            targetValue: modelData[1][0],
            options: modelData,
            onSelected(select, option) {
                generateTable();
            }
        })
    }

    function initSizeSelect(sizes){
        let sizesData = [];
        sizes.forEach(size => {
            sizesData.push([size, size]);
        })

        size1 = new CustomSelect('#size-1', {
            name: 'size-1',
            placeholder: '',
            targetValue: sizesData[0][0],
            options: sizesData,
            onSelected(select, option) {
                generateTable();
            }
        })

        size2 = new CustomSelect('#size-2', {
            name: 'size-2',
            placeholder: '',
            targetValue: sizesData[0][0],
            options: sizesData,
            onSelected(select, option) {
                generateTable();
            }
        })
    }


    // Get Google Sheet data
    let tableData = [];

    fetch("https://script.google.com/macros/s/AKfycbyzvMgfs4tEvkKJ3hiW3z2KHosatQcNL0byIvmnKQA_Sz3O1KtNxQp3FqV87sY0da18Dg/exec")
        .then(response => response.json())
        .then(function (result){
            let productsName = [];
            let frame_size = [];

            result.forEach(item => {
                let params = item['data'];
                frame_size = getParamsByName('Frame size', item.data);
                productsName.push(item['sheetName']);

                let t = {};

                t['name'] = item['sheetName'];
                t['frame_size'] = frame_size;
                t['params'] =  {};


                frame_size.forEach((size, index) => {
                    t['params'][size] = {};

                    params.forEach(param => {
                        if (param[0].trim() !== ''){
                            t['params'][size][param[0]] = param[index + 1];
                        }
                    })
                })

                tableData.push(t);
            })

            initModelsSelect(productsName);
            initSizeSelect(frame_size);
            generateTable();
        })
        .catch(error => console.log('error', error));


    function generateTable(){
        const paramsName = [
            'Specs',
            'Weight',
            'Frame',
            'Headset',
            'Bottom Bracket',
            'Max. Tire Clearance',
            'Max. system weight',

            'Geometry',
            'Seat tube length',
            'Top tube length',
            'Head tube length',
            'Seat tube length',
            'Stack',
            'Reach',
            'Chainstay length',
            'Wheelbase',
            'Standover height',
            'Crankset',
            'Stem',
            'Handlebar',
            'Seatpost'
        ]
        let modelName_1 = +model1.value;
        let modelName_2 = +model2.value;

        let modelSize_1 = +size1.value;
        let modelSize_2 = +size2.value;

        let params_product_1 = tableData[modelName_1].params[modelSize_1];
        let params_product_2 = tableData[modelName_2].params[modelSize_2];

        const rows_html = document.querySelectorAll('.comparison-body .comparison-main .row');

        paramsName.forEach((paramName, index) => {
            const row_html = rows_html[index];

            if (params_product_1[paramName] !== undefined){
                row_html.innerHTML = `
                    <div class="col">
                        <p class="text">${params_product_1[paramName]}</p>
                    </div>
                    <div class="col">
                        <p class="text">${params_product_2[paramName]}</p>
                    </div>
                `
            }
        })

        // Set btns link/text
        const btn1 = rows_html[rows_html.length - 1].querySelector('.col:nth-child(1) .btn-primary');
        const btn2 = rows_html[rows_html.length - 1].querySelector('.col:nth-child(2) .btn-primary');

        btn1.innerHTML = tableData[modelName_1]['name'];
        btn1.href = params_product_1['Product page URL']
        btn2.innerHTML = tableData[modelName_2]['name'];
        btn2.href = params_product_1['Product page URL'];


        // Set image
        const img1 = document.querySelector('.comparison-header .comparison-main .row:nth-child(3) .col:nth-child(1) img');
        img1.src = params_product_1['Image URL'];

        const img2 = document.querySelector('.comparison-header .comparison-main .row:nth-child(3) .col:nth-child(2) img');
        img2.src = params_product_2['Image URL'];
    }



    function getParamsByName(name, data){
        let copy = JSON.parse(JSON.stringify(data));

        for (let i = 0; i < copy.length; i++){
            if (copy[i][0] === name){
                copy[i].shift();
                return copy[i];
            }
        }

        return [];
    }
})

