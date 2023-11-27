import { setTab, generateMenu, generateDips } from './menu-helper'

function loadMenu(content) {
  const menu = document.createElement('div')
  menu.classList.add('menu', 'tab-page')
  const options = document.createElement('div')
  const foodCont = document.createElement('div')
  const listParent = document.createElement('ul')
  const chickenList = document.createElement('li')
  const dipsList = document.createElement('li')

  content.textContent = ''
  content.appendChild(menu)
  menu.append(options, foodCont)

  options.appendChild(listParent)
  listParent.append(chickenList, dipsList)
  chickenList.textContent = 'Chicken'
  dipsList.textContent = 'Dips'
  generateMenu(foodCont)
  chickenList.classList.add('activeOption')

  chickenList.addEventListener('click', () => {
    if (!chickenList.classList.contains('activeOption')) {
      setTab(chickenList)
      generateMenu(foodCont)
    }
  })

  dipsList.addEventListener('click', () => {
    if (!dipsList.classList.contains('activeOption')) {
      setTab(dipsList)
      generateDips(foodCont)
    }
  })
}

export { loadMenu }
