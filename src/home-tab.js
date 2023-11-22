import chicken from './assets/chick-home-0.png'

function loadHome(content){
    
    const homeContent = document.createElement('div')
    homeContent.classList.add('home', 'tab-page')
    const left = document.createElement('div')
    const right = document.createElement('div')
    const image = document.createElement('img')
    const headerCont = document.createElement('div')
    const header = document.createElement('span')
    const flavor = document.createElement('div')
    const aboutUs = document.createElement('div')
    const about1 = document.createElement('p')
    const about2 = document.createElement('p')
    const contactUs = document.createElement('div')
    const number = document.createElement('div')
    const email = document.createElement('div')

    //clear Content
    content.textContent = '';
    content.appendChild(homeContent)
    homeContent.append(left, right);
    left.append(headerCont, aboutUs, contactUs);
    left.classList.add('left')
    right.appendChild(image);
    right.classList.add('right')
    
    headerCont.appendChild(header)
    header.textContent = "Where Chicken Meets"
    flavor.textContent = 'flavor'
    header.appendChild(flavor)

    aboutUs.append(about1, about2)
    about1.textContent = "We're a fried chicken restaurant that celebrates the global love for this delicious dish. Our menu features crispy, juicy, and flavorful chicken recipes, each paired with a homemade dip. "
    about2.textContent = "At Chick'n Dip, we're not just serving food - we're serving experiences. So come on in, and get ready to dip into deliciousness!"
    
    contactUs.textContent = "Contact Us:"
    contactUs.append(number, email)
    number.textContent = '+1 (123) 456-7890'
    email.textContent = 'info@chickndip.com'

    image.src = chicken
}

export {loadHome}