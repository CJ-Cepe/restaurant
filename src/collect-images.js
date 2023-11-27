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

/* Other links
"./assets/chick-home-0.png"

"./assets/garlic-sauce.jpg"
"./assets/honey-sauce.jpg"
"./assets/spicy-sauce.jpg"
"./assets/sweet-sauce.jpg"

"./assets/spicy-0.png"
"./assets/parmesan-0.png"
"./assets/honey-0.png"
"./assets/classic-0.png"
*/

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

export { collectImages }
