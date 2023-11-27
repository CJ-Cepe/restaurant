import { loadHome } from './home-tab'
import { loadLocation } from './location-tab'
import { loadMenu } from './menu-tab'

function loadPage() {
  const body = document.querySelector('body')
  const content = document.querySelector('#content')
  const navigator = document.createElement('nav')
  const title = document.createElement('span')
  const option = document.createElement('div')
  const home = document.createElement('a')
  const menu = document.createElement('a')
  const location = document.createElement('a')

  title.textContent = "Chick'n Dip"
  home.textContent = 'Home'
  menu.textContent = 'Menu'
  location.textContent = 'Location'

  home.href = '#'
  menu.href = '#'
  location.href = '#'

  body.insertBefore(navigator, content)
  navigator.append(title, option)
  option.append(home, menu, location)

  setTab(home)
  loadHome(content)

  home.addEventListener('click', () => {
    if (!home.classList.contains('activeTab')) {
      setTab(home)
      loadHome(content)
    }
  })

  menu.addEventListener('click', () => {
    if (!menu.classList.contains('activeTab')) {
      setTab(menu)
      loadMenu(content)
    }
  })

  location.addEventListener('click', () => {
    if (!location.classList.contains('activeTab')) {
      setTab(location)
      loadLocation(content)
    }
  })
}

/* ------ helper functions ------ */
function setTab(activeTab) {
  removeActive()
  addActive(activeTab)
}

function removeActive() {
  const tabs = Array.from(document.querySelectorAll('nav > div a'))
  tabs.forEach(tab => {
    tab.classList.remove('activeTab')
  })
}

function addActive(activeTab) {
  activeTab.classList.add('activeTab')
}

export { loadPage }
