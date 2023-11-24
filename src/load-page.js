import { loadHome } from "./home-tab";
import { loadLocation } from "./location-tab";
import { loadMenu } from "./load-menu";

function loadPage() {
    const body = document.querySelector('body');
    const content = document.querySelector('#content');
    const navigator = document.createElement('nav');
    const title = document.createElement('span')
    const option = document.createElement('div')
    const home = document.createElement('span')
    const menu = document.createElement('span')
    const location = document.createElement('span')

    title.textContent = "Chick'n Dip"
    home.textContent = "Home"
    menu.textContent = "Menu"
    location.textContent = "Location"

    body.insertBefore(navigator, content)
    navigator.append(title, option)
    option.append(home, menu, location)

    setTab(home)
    loadHome(content)

    home.addEventListener('click', () => {
        if(!home.classList.contains('activeTab')){
            setTab(home)
            loadHome(content)
        }
        
    })

    menu.addEventListener('click', () => {
        if(!menu.classList.contains('activeTab')){
            setTab(menu)
            loadMenu(content)
        }
    })

    location.addEventListener('click', () => {
        if(!location.classList.contains('activeTab')){
            setTab(location)
            loadLocation(content)
        }
    })
}

//to extract 
function setTab(activeTab){
    removeActive()
    addActive(activeTab)
}

function removeActive(){
    let tabs = Array.from(document.querySelectorAll('nav > div span'))
    tabs.forEach(tab => {
        tab.classList.remove('activeTab')
    });
}

function addActive(activeTab){
    activeTab.classList.add('activeTab')
}


export {loadPage}