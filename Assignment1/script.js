const menu = document.getElementsByClassName('menu')[0]
const header = document.getElementById('Header');
console.log(header)
const menuTop = menu.clientHeight;
console.log(menuTop)
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
