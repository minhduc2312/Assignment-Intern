const menu = document.getElementsByClassName('menu')[0]
const header = document.getElementById('Header');
const menuTop = menu.clientHeight;
function fixedMenu() {
    if (window.scrollY >= menuTop) {
        header.style.paddingTop = menu.offsetHeight + 36 + "px";
        header.style.height = 820 - 177 + "px";
        menu.classList.add("fixed-menu");
    } else {
        header.style.paddingTop = '36px';
        menu.classList.remove("fixed-menu");
        header.style.height = '820px'
    }
}

window.addEventListener("scroll", fixedMenu);

//menu active
const menuList = document.getElementsByClassName('menu--list')[0];
const menuItemList = menuList.getElementsByClassName('menu--item');
for (let i = 0; i < menuItemList.length; i++) {
    menuItemList[i].addEventListener('click',()=>{
        const currentActive = menuList.getElementsByClassName('active')[0];
        currentActive.classList.toggle('active');
        menuItemList[i].classList.add('active')
    })
}

function scrollToFooter(){
    document.getElementById('footer').scrollIntoView()
}
