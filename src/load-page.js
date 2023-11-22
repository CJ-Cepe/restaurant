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
}


export {loadPage}