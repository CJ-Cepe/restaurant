import chicken1 from './assets/classic-0.png'
import chicken2 from './assets/spicy-0.png'
import chicken3 from './assets/parmesan-0.png'
import chicken4 from './assets/honey-0.png'

import classic1 from './assets/classic-1.jpg'
import classic2 from './assets/classic-2.jpg'
import classic3 from './assets/classic-3.jpg'
import classic4 from './assets/classic-4.jpg'

import parmesan1 from './assets/parmesan-1.jpg'
import parmesan2 from './assets/parmesan-2.jpg'
import parmesan3 from './assets/parmesan-3.jpg'
import parmesan4 from './assets/parmesan-4.jpg'

import honey1 from './assets/honey-1.jpg'
import honey2 from './assets/honey-2.jpg'
import honey3 from './assets/honey-3.jpg'
import honey4 from './assets/honey-4.jpg'

import spicy1 from './assets/spicy-1.jpg'
import spicy2 from './assets/spicy-2.jpg'
import spicy3 from './assets/spicy-3.jpg'
import spicy4 from './assets/spicy-4.jpg'

import sauce1 from "./assets/honey-sauce.png"
import sauce2 from "./assets/spicy-sauce.png"
import sauce3 from "./assets/garlic-sauce.png"
import sauce4 from "./assets/sweet-sauce.png"

import foods from './content.json'

function collectImages(a) {
  let image1, image2, image3, image4

  switch (a) {
    case 1:
      image1 = classic1
      image2 = classic2
      image3 = classic3
      image4 = classic4
      break
    case 2:
      image1 = spicy1
      image2 = spicy2
      image3 = spicy3
      image4 = spicy4
      break
    case 3:
      image1 = parmesan1
      image2 = parmesan2
      image3 = parmesan3
      image4 = parmesan4
      break
    case 4:
      image1 = honey1
      image2 = honey2
      image3 = honey3
      image4 = honey4
      break
  }

  return [image1, image2, image3, image4]
}

function generateMenu(foodCont) {
  foodCont.textContent = ""

  for (let i = 1; i < 5; i++) {
    const food = document.createElement('div')
    const foodImage = document.createElement('img')
    const foodTitle = document.createElement('p')
    const foodNewLine = document.createElement('span')
    foodImage.classList.add('food-image')
    foodTitle.classList.add('food-title')
    food.classList.add('food-card')
    foodNewLine.textContent = 'Chicken'
    foodCont.appendChild(food)
    food.append(foodImage, foodTitle)

    food.addEventListener('click', e => {
      const children = Array.from(foodCont.children)
      let index = children.indexOf(food)
      showFood(content, ++index)
    })

    switch (i) {
      case 1:
        foodImage.src = chicken1
        foodTitle.textContent = 'Classic Crispy'
        break
      case 2:
        foodImage.src = chicken2
        foodTitle.textContent = 'Spicy Hot'
        break
      case 3:
        foodImage.src = chicken3
        foodTitle.textContent = 'Garlic Parmesan'
        break
      case 4:
        foodImage.src = chicken4
        foodTitle.textContent = 'Honey Glazed'
        break
    }
    foodTitle.appendChild(foodNewLine)
  }
}

function generateDips(foodCont) {
  foodCont.textContent = ""

  for (let i = 1; i < 5; i++) {
    const food = document.createElement('div')
    const foodImage = document.createElement('img')
    const foodTitle = document.createElement('p')
    const foodNewLine = document.createElement('span')
    foodImage.classList.add('food-image')
    foodTitle.classList.add('food-title')
    food.classList.add('food-card')
    foodNewLine.textContent = 'Sauce'
    foodCont.appendChild(food)
    food.append(foodImage, foodTitle)

    switch (i) {
      case 1:
        foodImage.src = sauce1
        foodTitle.textContent = 'Honey Mustard'
        break
      case 2:
        foodImage.src = sauce2
        foodTitle.textContent = 'Spicy Barbecue'
        break
      case 3:
        foodImage.src = sauce3
        foodTitle.textContent = 'Garlic Aioli'
        break
      case 4:
        foodImage.src = sauce4
        foodTitle.textContent = 'Sweet Chili'
        break
    }
    foodTitle.appendChild(foodNewLine)
  }
}

/* ------ helper functions ------ */
function setTab(activeTab) {
  removeActive()
  addActive(activeTab)
}

function removeActive() {
  const tabs = Array.from(document.querySelectorAll('.menu > div > ul li'))
  tabs.forEach(tab => {
    tab.classList.remove('activeOption')
  })
}

function addActive(activeTab) {
  activeTab.classList.add('activeOption')
}


/* ------ helper functions ------ */
function showFood(content, index) {
  const modal = document.createElement('dialog')
  const h1 = document.createElement('h1')
  const p1 = document.createElement('p')
  const h2 = document.createElement('h2')
  const p2 = document.createElement('p')
  // add images
  const imageCont = document.createElement('div')
  const infoCont = document.createElement('div')
  const hr = document.createElement('hr')
  const info = setContent(index)

  imageCont.classList.add('image-cont')
  setImages(imageCont, index)

  content.appendChild(modal)
  modal.showModal()
  modal.append(imageCont, infoCont)
  infoCont.append(h1, p1, hr, h2, p2)

  h1.textContent = info.header1
  p1.textContent = info.paragraph1
  h2.textContent = info.header2
  p2.textContent = info.paragraph2

  modal.addEventListener('click', e => {
    closeModal(e, modal)
  })
}

function closeModal(e, modal) {
  const dialogDimensions = modal.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    document.querySelector('.content')
    modal.close()
    modal.remove()
  }
}

async function setImages(imageCont, index) {
  const imageSlider = document.createElement('div')
  const imageNav = document.createElement('div')
  const images = collectImages(index)
  const rightArrow = document.createElement('a')
  const leftArrow = document.createElement('a')

  for (let i = 0; i < images.length; i++) {
    const img = await preloadImage(images[i])
    const anchor = document.createElement('a')

    img.src = images[i]
    img.id = `image-${i}`
    anchor.href = `#image-${i}`

    imageSlider.appendChild(img)
    imageNav.appendChild(anchor)
  }

  imageCont.append(imageSlider, imageNav, leftArrow, rightArrow)

  let position = 0
  rightArrow.textContent = '>'
  leftArrow.textContent = '<'
  rightArrow.classList.add('arrow')
  leftArrow.classList.add('arrow')

  rightArrow.addEventListener('click', () => {
    if (position !== images.length - 1) {
      rightArrow.href = `#image-${++position}`
    } else {
      position = 0
      rightArrow.href = `#image-${position}`
    }
  })

  leftArrow.addEventListener('click', () => {
    if (position !== 0) {
      leftArrow.href = `#image-${--position}`
    } else {
      position = images.length - 1
      leftArrow.href = `#image-${position}`
    }
  })
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })
}

function setContent(a) {
  let header1, paragraph1, paragraph2
  const header2 = 'Nutritional & Allergen Information'

  switch (a) {
    case 1:
      header1 = foods.food1.header
      paragraph1 = foods.food1.content1
      paragraph2 = foods.food1.content2
      break
    case 2:
      header1 = foods.food2.header
      paragraph1 = foods.food2.content1
      paragraph2 = foods.food2.content2
      break
    case 3:
      header1 = foods.food3.header
      paragraph1 = foods.food3.content1
      paragraph2 = foods.food3.content2
      break
    case 4:
      header1 = foods.food4.header
      paragraph1 = foods.food4.content1
      paragraph2 = foods.food4.content2
      break
  }

  return { header1, paragraph1, header2, paragraph2 }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    try {
      const modal = document.querySelector('dialog')
      modal.close()
      modal.remove()
    } catch (e) {
      // console.log('no modal')
    }
  }
})

export { setTab, generateMenu, generateDips }