//menu active

const activeButton = (classList) => {
    const menuList = document.querySelector(classList);
    const menuItemList = menuList.getElementsByClassName('menu__item');
    for (let i = 0; i < menuItemList.length; i++) {
        menuItemList[i].addEventListener('click', () => {
            const currentActive = menuList.getElementsByClassName('active')[0];
            currentActive.classList.toggle('active');
            menuItemList[i].classList.add('active')
        })
    }
}
activeButton(".menu__main")
activeButton(".menu__sub")




//switch tabs
const tabsElement = document.querySelector('.content__tabs');
const underline = tabsElement.querySelector('.tab--underline');
const tabList = tabsElement.getElementsByClassName('tab__item');
const underlineTab = (currentActive = tabsElement.querySelector('.active')) => {
    underline.style.left = currentActive.offsetLeft + 'px';
    underline.style.width = currentActive.clientWidth + 'px';
}
underlineTab();
for (let i = 0; i < tabList.length; i++) {
    tabList[i].addEventListener('click', () => {
        const currentActive = tabsElement.getElementsByClassName('active')[0];
        currentActive.classList.toggle('active');
        tabList[i].classList.add('active')
        underlineTab(tabList[i])
    })
}
//show hide sub menu
let isToggle = true;
const collapseButton = document.querySelector('.icon--collapse');
const subMenu = document.querySelector('.menu__sub');
const iconCollapseButton = collapseButton.querySelector('img')
let deg = 0
const toggleSubMenu = () => {
    subMenu.classList.toggle('active')
    deg += 180;
    iconCollapseButton.style.transform = `rotate(${deg % 360}deg)`
}

///open form create canned
const createForm = document.querySelector('.content__create-canned');
const handleOpenCreateForm = () => {
    createForm.classList.toggle('active')
}

//click on head table
const headTable = document.querySelectorAll('.table--btn-header');
const sortByField = () => {
    for (let i = 0; i < headTable.length; i++) {
        headTable[i].addEventListener('click', () => {
            for (let j = 0; j < headTable.length; j++) { //remove all th except th clicked
                if (i !== j) {
                    headTable[j].classList.remove('sort-desc');
                    headTable[j].classList.remove('sort-asc');
                }
            }
            //rotate icon if exist, otherwise initial desc
            if (headTable[i].classList.contains('sort-asc')) {
                headTable[i].classList.remove('sort-asc');
                headTable[i].classList.add('sort-desc');
            } else if (headTable[i].classList.contains('sort-desc')) {
                headTable[i].classList.remove('sort-desc');
                headTable[i].classList.add('sort-asc');
            } else {
                headTable[i].classList.add('sort-desc');
            }

        })
    }
}
sortByField();




