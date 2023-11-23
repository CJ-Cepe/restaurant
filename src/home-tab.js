import chicken from './assets/chick-home-0.png'

function loadHome(content){
    
    const home = document.createElement('div')
    home.classList.add('home', 'tab-page')
    const image = document.createElement('img')
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
    content.appendChild(home)
    home.append(aboutUs, contactUs, image, header);
    
    header.textContent = "Where Chicken Meets"
    header.appendChild(flavor)
    flavor.textContent = 'flavor'
    
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