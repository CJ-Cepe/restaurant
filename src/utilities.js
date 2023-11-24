import classic1 from "./assets/classic-1.jpg"
import parmesan1 from "./assets/parmesan-1.jpg"
import honey1 from "./assets/honey-1.jpg"
import spicy1 from "./assets/spicy-1.jpg"



function collectImages(a){
    let image1, image2, image3, image4

    switch(a){
        case 1: image1 = classic1
                break;
        case 2: image1 = spicy1
                break;
        case 3: image1 = parmesan1
                break;
        case 4: image1 = honey1
                break;
    }

    return [image1]
}

export {collectImages}