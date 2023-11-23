function loadLocation (content) {
  const location = document.createElement('div')
  location.classList.add('location', 'tab-page')
  // label
  // enter location
  // span
  // input

  const form = document.createElement('form')
  const label = document.createElement('label')
  const slogan = document.createElement('div')
  const input = document.createElement('input')
  const button = document.createElement('button')
  const map = document.createElement('iframe')

  // clear Content
  content.textContent = ''
  content.appendChild(location)
  location.append(form, map)
  form.append(label, input, button)

  label.textContent = 'Enter Location'
  slogan.textContent = "Your Chick'n Dip Adventure Starts Here"
  label.appendChild(slogan)
  label.for = 'find'

  input.id = 'find'
  input.required = 'true'
  input.placeholder = 'enter address'

  button.type = 'submit'
  button.textContent = 'Find'

  map.width = '600'
  map.height = '450'
  map.allowfullscreen = ''
  map.loading = 'lazy'
  map.referrerPolicy = 'no-referrer-when-downgrade'
  map.src = 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.227560724951!2d-81.90409626332361!3d41.30391291160514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzE0LjEiTiA4McKwNTQnMDYuMSJX!5e0!3m2!1sen!2sph!4v1700751725684!5m2!1sen!2sph'
}

export { loadLocation }
