import chicken1 from './assets/classic-0.png'
import chicken2 from './assets/spicy-0.png'
import chicken3 from './assets/parmesan-0.png'
import chicken4 from './assets/honey-0.png'

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

  for (let i = 1; i < 5; i++) {
    const food = document.createElement('div')
    const foodImage = document.createElement('img')
    const foodTitle = document.createElement('div')

    foodCont.appendChild(food)
    food.append(foodImage, foodTitle)

    switch (i) {
      case 1:
        foodImage.src = chicken1
        foodTitle.textContent = 'Classic Crispy Chicken'
        break
      case 2:
        foodImage.src = chicken2
        foodTitle.textContent = 'Spicy Hot Chicken'
        break
      case 3:
        foodImage.src = chicken3
        foodTitle.textContent = 'Garlic Parmesan Chicken'
        break
      case 4:
        foodImage.src = chicken4
        foodTitle.textContent = 'Honey Glazed Chicken'
        break
    }
  }
}

export { loadMenu }
