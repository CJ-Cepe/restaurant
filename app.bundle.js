(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>A});var t=r(537),i=r.n(t),a=r(645),o=r.n(a)()(i());o.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Open+Sans:wght@300;400&display=swap);"]),o.push([n.id,":root {\n    --white1: #F5F5F7;\n    --black1: #000000;\n    --gray1: #8B8B8B;\n    --gray2: #333333;\n    --gray3: #bebebe;\n    --red1: #D52827;\n\n}\n\n/* ---------- CSS reset ----------*/\n*, \n*::before, \n*::after{\n    box-sizing: border-box;\n   /*  outline: rgb(21, 0, 255) 1px solid   */\n}\n\n* {\n    margin: 0;\n    padding: 0;\n}\n\n/* ---------- main body ----------*/\nhtml {\n    scroll-snap-type: y mandatory;\n    scroll-padding-top: 15vh;\n}\n\nbody::-webkit-scrollbar {\n    display: none;  /* Safari and Chrome */\n\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    max-width: 100%;\n    background-color: var(--white1);\n\n    display: grid;\n    grid-template-rows: 0.15fr 1fr;\n\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */\n    scrollbar-width: none;  /* Firefox */\n}\n\nnav{\n    font-family: 'Kaushan Script', cursive;\n    width: 100%;\n    height: 15vh;\n    position: sticky;\n    top: 0;\n    background-color: rgba(245, 245, 247, 0.5);\n    backdrop-filter: blur(10px);\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 5%;\n}\n\n/* --------- navigator ----------*/\nnav > span {\n    font-size: 2rem;\n}\n\nnav > div {\n    font-size: 1.5rem;\n    \n    transition: 0.2s;\n\n    display: flex;\n    gap: 5vw;\n}\n\nnav > div a {\n    text-decoration: none;\n    color: var(--gray1); \n}\n\nnav > div a:hover {\n    color: var(--gray2);\n}\n\n.activeTab {\n    color: var(--gray2);\n}\n\n/* ---------- home ----------*/\n.home {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.home > div:first-child, \n.home > div:nth-child(2){\n    animation: fade linear both;\n    animation-timeline: view();\n}\n\n.home > div:first-child {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n    height: 85vh;\n    scroll-snap-align: start;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 0 0 5% 36%;\n}\n\n.home > div:first-child p {\n    color: var(--gray1);\n    font-family: 'Open Sans', sans-serif;\n    font-size: 1.2rem;\n    font-weight: 300;\n    line-height: 1.5rem;\n    margin-bottom: 2rem;\n    letter-spacing: 1.1px;\n}\n\n.home > div:nth-child(2){\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    height: 85vh;\n    scroll-snap-align: start;\n\n    font-size: 2rem;\n    font-family: 'Kaushan Script', cursive;\n    color: var(--gray2);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 0 10% 15% 36%;\n}\n\n.home > div:nth-child(2) div {\n    font-size: 2.5rem;\n    font-family: 'Open Sans', sans-serif;\n    color: var(--gray1);\n\n    padding-left: 10%;\n}\n\n.home > img {\n    grid-column: 2 / 3;\n    grid-row: 1 / 3;\n    width: 70%;\n    height: auto;\n\n    align-self: end;\n}\n\n.home > span:last-child {\n    position: fixed;\n    right: 50%;\n    top: 30%;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 3rem;\n    text-align: end;\n}\n\n.home > span:last-child > div{\n    font-family: 'Kaushan Script', cursive;\n    font-size: 5.5rem;\n    text-transform: capitalize;\n    line-height: 1;\n}\n\n@keyframes fade {\n    0%, 40% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 1;\n    }\n\n    70%, 100%{\n        opacity: 0;\n    }\n}\n\n/*---------- location ----------*/\n\n.location {\n    display: grid;\n    grid-template-columns: 0.7fr 1fr;\n    height: 85vh;\n}\n\n.location > :first-child {\n    grid-column: 1 / 2;\n    font-family: 'Open Sans', sans-serif;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 2rem;\n    padding-top: 5rem;\n   \n}\n\n.location > :first-child > label{\n    font-size: 3rem;\n    text-align: center;\n}\n\n.location > :first-child > label > div{\n    font-family: 'Kaushan Script', cursive;\n    font-size: 1.5rem;\n    color: var(--gray1)\n}\n\n.location > :first-child > input {\n    font-size: 1.5rem;\n    width: 70%;\n    border-radius: 50px;\n    background-color: var(--gray3);\n    padding: 1rem 1.5rem 1rem 1.5rem;\n    border: none;\n    color: var(--gray2);\n}\n\n.location > :first-child > button {\n    width: 30%;\n    height: 8%;\n    border-radius: 5px;\n\n    font-size: 1.5rem;\n    background-color: var(--gray2);\n    color: var(--white1);\n}\n\n.location > :last-child {\n    grid-column: 2 / 3;\n    align-self: center;\n    justify-self: center;\n    font-family: 'Open Sans', sans-serif;\n}\n\n.location > :last-child > figcaption {\n    text-align: center;\n    color: var(--red1);\n}\n\n.location > :last-child > iframe {\n    width: 800px;\n    border: 2px solid;\n}\n\n/*---------- menu ----------*/\n* {\n    /* outline: 1px solid blue;   */\n}\n\n.menu {\n    display: grid;\n    grid-template-columns: 0.3fr 1fr;\n}\n\n.menu > :first-child {\n    display: flex;\n    justify-content: center;\n    align-items: start;\n    padding-top: 2rem;\n}\n\n.menu > div:first-child > ul {\n    list-style-type: none;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 2rem;\n    border: 1px solid var(--gray1);\n    padding: 1rem;\n}\n\n.menu li {\n    color: var(--gray1);\n    transition: 0.2s;\n}\n\n.menu li:first-child {\n    margin-bottom: 1rem;\n}\n\n.menu li:hover{\n    color: var(--gray2);\n    font-weight: 700 ;\n}\n\n.menu .activeOption {\n    color: var(--black1);\n    font-weight: 700 ;\n}\n\n.menu > div:nth-child(2) { \n    display: grid;\n    grid-template-columns: repeat(auto-fit, 30%);\n    row-gap: 5rem;\n}\n\n.menu .food-card {\n    grid-column: span 1;\n   transition: 0.3s;\n    width: 200px;\n    aspect-ratio: 1 /1;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.menu .food-image {\n    width: 150px;\n}\n\n.menu .food-card:hover  {\n    transform: scale(1.2);\n}\n\n.menu .food-card:hover .food-title {\n    color: var(--red1);\n}\n\n.menu .food-title {\n    font-family: 'Kaushan Script', cursive;\n    font-size: 1.5rem;\n    text-align: center; \n    transition: 0.2s;\n}\n\n.menu .food-title > span {\n    display: block;\n}\n\n/* -------- Modal ---------*/\n*{\n  /*   outline: 1px solid blue; */\n}\ndialog[open]{\n    width:60vw;\n    height: 35vw;\n\n    position: fixed; \n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n    gap: 1rem;\n    border: none;\n}\n\ndialog > div:nth-child(2) {\n    flex-basis: 50%;\n    height: 100%;\n    \n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-family: 'Open Sans', sans-serif;\n    padding: 0 1rem;\n}\n\ndialog > div:nth-child(2) h1{\n   font-family: 'Kaushan Script', cursive;\n   font-size: 3vw;\n   margin-bottom: 1rem;\n}\n\ndialog > div:nth-child(2) p:nth-child(2){\n    font-size: 1.5vw;\n }\n\n dialog > div:nth-child(2) hr {\n    margin: 1rem 0;\n    width: 80%;\n    align-self: center;\n}\n\n dialog > div:nth-child(2) h2{\n    font-size: 1.5vw;\n }\n\ndialog > div:nth-child(2) > p:nth-child(5){\n    font-size: 1vw;\n    color: var(--gray1);\n }\n\n /* ----- slider ------- */\n * {\n   /*  outline: 1px solid blue; */\n }\n\n .image-cont {\n    width: 50%;\n    position: relative;\n    \n    /* max-width: 48rem;\n    margin: 0 auto;  */\n }\n\n .image-cont > div:first-child {\n    width: 100%;\n\n    overflow-x: hidden;\n    scroll-snap-type: x mandatory;\n    scroll-behavior: smooth;\n\n    display: flex;\n }\n\n .image-cont > div:first-child img{\n    width: 100%;\n    aspect-ratio: 1 / 1;\n    scroll-snap-align: start;\n    object-fit: contain;\n }\n\n.image-cont > div:nth-child(2){\n    position: absolute;\n    z-index: 1;\n    left: 50%;\n    top: 93%;\n    transform: translateX(-50%);\n    \n    display: flex;\n    column-gap: 1.5rem;\n }\n\n.image-cont > div:nth-child(2) a {\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background-color: var(--gray1);\n    opacity: 0.50;\n    transition: 0.2s;\n }\n\n.image-cont > div:nth-child(2) a:hover{\n    opacity: 1;\n}\n\n.image-cont .arrow {\n    font-family:'Open Sans', sans-serif; ;\n    font-size: 3rem;\n    font-weight:bolder;\n    color: var(--gray1);\n    position: absolute;\n    top: 50%;\n    z-index: 1;\n    text-decoration: none;\n    transform: translateY(-50%);\n}\n\n.image-cont .arrow:hover {\n    color: var(--red1);\n}\n\n.image-cont > a:nth-child(3){\n    right: 90%;\n}\n\n.image-cont > a:nth-child(4){\n    left: 90%;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Open+Sans:wght@300;400&display=swap');\r\n\r\n:root {\r\n    --white1: #F5F5F7;\r\n    --black1: #000000;\r\n    --gray1: #8B8B8B;\r\n    --gray2: #333333;\r\n    --gray3: #bebebe;\r\n    --red1: #D52827;\r\n\r\n}\r\n\r\n/* ---------- CSS reset ----------*/\r\n*, \r\n*::before, \r\n*::after{\r\n    box-sizing: border-box;\r\n   /*  outline: rgb(21, 0, 255) 1px solid   */\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* ---------- main body ----------*/\r\nhtml {\r\n    scroll-snap-type: y mandatory;\r\n    scroll-padding-top: 15vh;\r\n}\r\n\r\nbody::-webkit-scrollbar {\r\n    display: none;  /* Safari and Chrome */\r\n\r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    max-width: 100%;\r\n    background-color: var(--white1);\r\n\r\n    display: grid;\r\n    grid-template-rows: 0.15fr 1fr;\r\n\r\n    -ms-overflow-style: none;  /* Internet Explorer 10+ */\r\n    scrollbar-width: none;  /* Firefox */\r\n}\r\n\r\nnav{\r\n    font-family: 'Kaushan Script', cursive;\r\n    width: 100%;\r\n    height: 15vh;\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: rgba(245, 245, 247, 0.5);\r\n    backdrop-filter: blur(10px);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 0 5%;\r\n}\r\n\r\n/* --------- navigator ----------*/\r\nnav > span {\r\n    font-size: 2rem;\r\n}\r\n\r\nnav > div {\r\n    font-size: 1.5rem;\r\n    \r\n    transition: 0.2s;\r\n\r\n    display: flex;\r\n    gap: 5vw;\r\n}\r\n\r\nnav > div a {\r\n    text-decoration: none;\r\n    color: var(--gray1); \r\n}\r\n\r\nnav > div a:hover {\r\n    color: var(--gray2);\r\n}\r\n\r\n.activeTab {\r\n    color: var(--gray2);\r\n}\r\n\r\n/* ---------- home ----------*/\r\n.home {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.home > div:first-child, \r\n.home > div:nth-child(2){\r\n    animation: fade linear both;\r\n    animation-timeline: view();\r\n}\r\n\r\n.home > div:first-child {\r\n    grid-column: 1 / 2;\r\n    grid-row: 1 / 2;\r\n    height: 85vh;\r\n    scroll-snap-align: start;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n    padding: 0 0 5% 36%;\r\n}\r\n\r\n.home > div:first-child p {\r\n    color: var(--gray1);\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 1.2rem;\r\n    font-weight: 300;\r\n    line-height: 1.5rem;\r\n    margin-bottom: 2rem;\r\n    letter-spacing: 1.1px;\r\n}\r\n\r\n.home > div:nth-child(2){\r\n    grid-column: 1 / 2;\r\n    grid-row: 2 / 3;\r\n    height: 85vh;\r\n    scroll-snap-align: start;\r\n\r\n    font-size: 2rem;\r\n    font-family: 'Kaushan Script', cursive;\r\n    color: var(--gray2);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n    padding: 0 10% 15% 36%;\r\n}\r\n\r\n.home > div:nth-child(2) div {\r\n    font-size: 2.5rem;\r\n    font-family: 'Open Sans', sans-serif;\r\n    color: var(--gray1);\r\n\r\n    padding-left: 10%;\r\n}\r\n\r\n.home > img {\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 3;\r\n    width: 70%;\r\n    height: auto;\r\n\r\n    align-self: end;\r\n}\r\n\r\n.home > span:last-child {\r\n    position: fixed;\r\n    right: 50%;\r\n    top: 30%;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 3rem;\r\n    text-align: end;\r\n}\r\n\r\n.home > span:last-child > div{\r\n    font-family: 'Kaushan Script', cursive;\r\n    font-size: 5.5rem;\r\n    text-transform: capitalize;\r\n    line-height: 1;\r\n}\r\n\r\n@keyframes fade {\r\n    0%, 40% {\r\n        opacity: 0;\r\n    }\r\n\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n\r\n    70%, 100%{\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n/*---------- location ----------*/\r\n\r\n.location {\r\n    display: grid;\r\n    grid-template-columns: 0.7fr 1fr;\r\n    height: 85vh;\r\n}\r\n\r\n.location > :first-child {\r\n    grid-column: 1 / 2;\r\n    font-family: 'Open Sans', sans-serif;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    padding-top: 5rem;\r\n   \r\n}\r\n\r\n.location > :first-child > label{\r\n    font-size: 3rem;\r\n    text-align: center;\r\n}\r\n\r\n.location > :first-child > label > div{\r\n    font-family: 'Kaushan Script', cursive;\r\n    font-size: 1.5rem;\r\n    color: var(--gray1)\r\n}\r\n\r\n.location > :first-child > input {\r\n    font-size: 1.5rem;\r\n    width: 70%;\r\n    border-radius: 50px;\r\n    background-color: var(--gray3);\r\n    padding: 1rem 1.5rem 1rem 1.5rem;\r\n    border: none;\r\n    color: var(--gray2);\r\n}\r\n\r\n.location > :first-child > button {\r\n    width: 30%;\r\n    height: 8%;\r\n    border-radius: 5px;\r\n\r\n    font-size: 1.5rem;\r\n    background-color: var(--gray2);\r\n    color: var(--white1);\r\n}\r\n\r\n.location > :last-child {\r\n    grid-column: 2 / 3;\r\n    align-self: center;\r\n    justify-self: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.location > :last-child > figcaption {\r\n    text-align: center;\r\n    color: var(--red1);\r\n}\r\n\r\n.location > :last-child > iframe {\r\n    width: 800px;\r\n    border: 2px solid;\r\n}\r\n\r\n/*---------- menu ----------*/\r\n* {\r\n    /* outline: 1px solid blue;   */\r\n}\r\n\r\n.menu {\r\n    display: grid;\r\n    grid-template-columns: 0.3fr 1fr;\r\n}\r\n\r\n.menu > :first-child {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: start;\r\n    padding-top: 2rem;\r\n}\r\n\r\n.menu > div:first-child > ul {\r\n    list-style-type: none;\r\n    font-family: 'Open Sans', sans-serif;\r\n    font-size: 2rem;\r\n    border: 1px solid var(--gray1);\r\n    padding: 1rem;\r\n}\r\n\r\n.menu li {\r\n    color: var(--gray1);\r\n    transition: 0.2s;\r\n}\r\n\r\n.menu li:first-child {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.menu li:hover{\r\n    color: var(--gray2);\r\n    font-weight: 700 ;\r\n}\r\n\r\n.menu .activeOption {\r\n    color: var(--black1);\r\n    font-weight: 700 ;\r\n}\r\n\r\n.menu > div:nth-child(2) { \r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, 30%);\r\n    row-gap: 5rem;\r\n}\r\n\r\n.menu .food-card {\r\n    grid-column: span 1;\r\n   transition: 0.3s;\r\n    width: 200px;\r\n    aspect-ratio: 1 /1;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.menu .food-image {\r\n    width: 150px;\r\n}\r\n\r\n.menu .food-card:hover  {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.menu .food-card:hover .food-title {\r\n    color: var(--red1);\r\n}\r\n\r\n.menu .food-title {\r\n    font-family: 'Kaushan Script', cursive;\r\n    font-size: 1.5rem;\r\n    text-align: center; \r\n    transition: 0.2s;\r\n}\r\n\r\n.menu .food-title > span {\r\n    display: block;\r\n}\r\n\r\n/* -------- Modal ---------*/\r\n*{\r\n  /*   outline: 1px solid blue; */\r\n}\r\ndialog[open]{\r\n    width:60vw;\r\n    height: 35vw;\r\n\r\n    position: fixed; \r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    gap: 1rem;\r\n    border: none;\r\n}\r\n\r\ndialog > div:nth-child(2) {\r\n    flex-basis: 50%;\r\n    height: 100%;\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    font-family: 'Open Sans', sans-serif;\r\n    padding: 0 1rem;\r\n}\r\n\r\ndialog > div:nth-child(2) h1{\r\n   font-family: 'Kaushan Script', cursive;\r\n   font-size: 3vw;\r\n   margin-bottom: 1rem;\r\n}\r\n\r\ndialog > div:nth-child(2) p:nth-child(2){\r\n    font-size: 1.5vw;\r\n }\r\n\r\n dialog > div:nth-child(2) hr {\r\n    margin: 1rem 0;\r\n    width: 80%;\r\n    align-self: center;\r\n}\r\n\r\n dialog > div:nth-child(2) h2{\r\n    font-size: 1.5vw;\r\n }\r\n\r\ndialog > div:nth-child(2) > p:nth-child(5){\r\n    font-size: 1vw;\r\n    color: var(--gray1);\r\n }\r\n\r\n /* ----- slider ------- */\r\n * {\r\n   /*  outline: 1px solid blue; */\r\n }\r\n\r\n .image-cont {\r\n    width: 50%;\r\n    position: relative;\r\n    \r\n    /* max-width: 48rem;\r\n    margin: 0 auto;  */\r\n }\r\n\r\n .image-cont > div:first-child {\r\n    width: 100%;\r\n\r\n    overflow-x: hidden;\r\n    scroll-snap-type: x mandatory;\r\n    scroll-behavior: smooth;\r\n\r\n    display: flex;\r\n }\r\n\r\n .image-cont > div:first-child img{\r\n    width: 100%;\r\n    aspect-ratio: 1 / 1;\r\n    scroll-snap-align: start;\r\n    object-fit: contain;\r\n }\r\n\r\n.image-cont > div:nth-child(2){\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 50%;\r\n    top: 93%;\r\n    transform: translateX(-50%);\r\n    \r\n    display: flex;\r\n    column-gap: 1.5rem;\r\n }\r\n\r\n.image-cont > div:nth-child(2) a {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50%;\r\n    background-color: var(--gray1);\r\n    opacity: 0.50;\r\n    transition: 0.2s;\r\n }\r\n\r\n.image-cont > div:nth-child(2) a:hover{\r\n    opacity: 1;\r\n}\r\n\r\n.image-cont .arrow {\r\n    font-family:'Open Sans', sans-serif; ;\r\n    font-size: 3rem;\r\n    font-weight:bolder;\r\n    color: var(--gray1);\r\n    position: absolute;\r\n    top: 50%;\r\n    z-index: 1;\r\n    text-decoration: none;\r\n    transform: translateY(-50%);\r\n}\r\n\r\n.image-cont .arrow:hover {\r\n    color: var(--red1);\r\n}\r\n\r\n.image-cont > a:nth-child(3){\r\n    right: 90%;\r\n}\r\n\r\n.image-cont > a:nth-child(4){\r\n    left: 90%;\r\n}\r\n"],sourceRoot:""}]);const A=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,a){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(t)for(var A=0;A<this.length;A++){var c=this[A][0];null!=c&&(o[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(i," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},o=[],A=0;A<n.length;A++){var c=n[A],s=t.base?c[0]+t.base:c[0],l=a[s]||0,d="".concat(s," ").concat(l);a[s]=l+1;var m=r(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(p);else{var f=i(p,t);t.byIndex=A,e.splice(A,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var a=t(n=n||[],i=i||{});return function(n){n=n||[];for(var o=0;o<a.length;o++){var A=r(a[o]);e[A].references--}for(var c=t(n,i),s=0;s<a.length;s++){var l=r(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!n;)n=t[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{const n=r.p+"550dfe5b1d5da0069d8a.png";function e(e){const r=document.createElement("div");r.classList.add("home","tab-page");const t=document.createElement("img"),i=document.createElement("span"),a=document.createElement("div"),o=document.createElement("div"),A=document.createElement("p"),c=document.createElement("p"),s=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div");e.textContent="",e.appendChild(r),r.append(o,s,t,i),i.textContent="Where Chicken Meets",i.appendChild(a),a.textContent="flavor",o.append(A,c),A.textContent="We're a fried chicken restaurant that celebrates the global love for this delicious dish. Our menu features crispy, juicy, and flavorful chicken recipes, each paired with a homemade dip. ",c.textContent="At Chick'n Dip, we're not just serving food - we're serving experiences. So come on in, and get ready to dip into deliciousness!",s.textContent="Contact Us:",s.append(l,d),l.textContent="+1 (123) 456-7890",d.textContent="info@chickndip.com",t.src=n}const t=r.p+"397e4f34a05735967a4c.png",i=r.p+"28f698be9ccfd44bd21c.png",a=r.p+"f9961ffae6da167abc8c.png",o=r.p+"91e70b726088fd3081b8.png",A=r.p+"945c37d85ddffc9d6ca2.jpg",c=r.p+"23826a4ff4bd357b714f.jpg",s=r.p+"7045e231dc411fe23f5e.jpg",l=r.p+"9a5e67cef69192cba43a.jpg",d=r.p+"ea0aae4d84d3bc19c75e.jpg",m=r.p+"b541979f71af9ff800b3.jpg",p=r.p+"98a5805180793943dc76.jpg",f=r.p+"8f618fdc83bd936ae0fc.jpg",h=r.p+"213c052437ee4c91963c.jpg",C=r.p+"98555e647a990c62febe.jpg",u=r.p+"6aff40b496a265b7c391.jpg",g=r.p+"d2cf1af727b55de0808c.jpg",B=r.p+"57f1ba18d341c8cc301a.jpg",v=r.p+"7777af8b6911bd5b5b81.jpg",I=r.p+"f68ec639bd9db65107f2.jpg",y=r.p+"40a51f7e2d736b89eec6.jpg",b=r.p+"bc69efecece106913d16.png",E=r.p+"d4fd3fb1cc432a2a2a3e.png",x=r.p+"6cc55be7f528fbd86290.png",w=r.p+"88ace82a6238396d283e.png",k=JSON.parse('{"Xt":{"Fs":"Classic Crispy Chicken","vs":"Our signature dish, featuring chicken that\'s marinated in a blend of spices, coated in a crispy batter, and deep-fried to golden perfection.","q4":"High in protein and a good source of essential vitamins like B6 and B12. However, it\'s also high in sodium and saturated fat due to the frying process. Potential allergens include gluten (from the batter) and soy (from the oil used for frying)."},"HM":{"Fs":"Spicy Hot Chicken","vs":"A spicy twist on our classic crispy chicken, seasoned with a fiery blend of spices for those who like it hot.","q4":"In addition to the nutritional benefits of our Classic Crispy Chicken, this dish contains capsaicin from the chili peppers, which can boost metabolism. Potential allergens include gluten and soy, as well as capsicum (from the chili peppers)."},"dP":{"Fs":"Garlic Parmesan Chicken","vs":"Crispy fried chicken tossed in a rich garlic parmesan sauce, offering a deliciously different way to enjoy our chicken.","q4":"Provides a good amount of calcium from the Parmesan cheese and has the added health benefits of garlic, which include potential anti-inflammatory and antioxidant effects. Potential allergens include gluten, soy, dairy (from the cheese), and alliums (from the garlic)."},"Eg":{"Fs":"Honey Glazed Chicken","vs":"Sweet and savory meet in this dish, featuring our crispy chicken glazed with a light honey sauce.","q4":"A sweet and savory dish that provides a good source of protein. The honey glaze adds a bit of sugar, so it\'s slightly higher in calories compared to our other dishes. Potential allergens include gluten, soy, and bee pollen (from the honey)."}}');function S(n){n.textContent="";for(let e=1;e<5;e++){const r=document.createElement("div"),A=document.createElement("img"),c=document.createElement("p"),s=document.createElement("span");switch(A.classList.add("food-image"),c.classList.add("food-title"),r.classList.add("food-card"),s.textContent="Chicken",n.appendChild(r),r.append(A,c),r.addEventListener("click",(e=>{let t=Array.from(n.children).indexOf(r);z(content,++t)})),e){case 1:A.src=t,c.textContent="Classic Crispy";break;case 2:A.src=i,c.textContent="Spicy Hot";break;case 3:A.src=a,c.textContent="Garlic Parmesan";break;case 4:A.src=o,c.textContent="Honey Glazed"}c.appendChild(s)}}function j(n){Array.from(document.querySelectorAll(".menu > div > ul li")).forEach((n=>{n.classList.remove("activeOption")})),function(n){n.classList.add("activeOption")}(n)}function z(n,e){const r=document.createElement("dialog"),t=document.createElement("h1"),i=document.createElement("p"),a=document.createElement("h2"),o=document.createElement("p"),b=document.createElement("div"),E=document.createElement("div"),x=document.createElement("hr"),w=function(n){let e,r,t;switch(n){case 1:e=k.Xt.Fs,r=k.Xt.vs,t=k.Xt.q4;break;case 2:e=k.HM.Fs,r=k.HM.vs,t=k.HM.q4;break;case 3:e=k.dP.Fs,r=k.dP.vs,t=k.dP.q4;break;case 4:e=k.Eg.Fs,r=k.Eg.vs,t=k.Eg.q4}return{header1:e,paragraph1:r,header2:"Nutritional & Allergen Information",paragraph2:t}}(e);b.classList.add("image-cont"),async function(n,e){const r=document.createElement("div"),t=document.createElement("div"),i=function(n){let e,r,t,i;switch(n){case 1:e=A,r=c,t=s,i=l;break;case 2:e=B,r=v,t=I,i=y;break;case 3:e=d,r=m,t=p,i=f;break;case 4:e=h,r=C,t=u,i=g}return[e,r,t,i]}(e),a=document.createElement("a"),o=document.createElement("a");for(let n=0;n<i.length;n++){const e=await L(i[n]),a=document.createElement("a");e.src=i[n],e.id=`image-${n}`,a.href=`#image-${n}`,r.appendChild(e),t.appendChild(a)}n.append(r,t,o,a);let b=0;a.textContent=">",o.textContent="<",a.classList.add("arrow"),o.classList.add("arrow"),a.addEventListener("click",(()=>{b!==i.length-1?a.href="#image-"+ ++b:(b=0,a.href=`#image-${b}`)})),o.addEventListener("click",(()=>{0!==b?o.href="#image-"+--b:(b=i.length-1,o.href=`#image-${b}`)}))}(b,e),n.appendChild(r),r.showModal(),r.append(b,E),E.append(t,i,x,a,o),t.textContent=w.header1,i.textContent=w.paragraph1,a.textContent=w.header2,o.textContent=w.paragraph2,r.addEventListener("click",(n=>{!function(n,e){const r=e.getBoundingClientRect();(n.clientX<r.left||n.clientX>r.right||n.clientY<r.top||n.clientY>r.bottom)&&(document.querySelector(".content"),e.close(),e.remove())}(n,r)}))}function L(n){return new Promise(((e,r)=>{const t=new Image;t.onload=()=>e(t),t.onerror=r,t.src=n}))}function U(n){Array.from(document.querySelectorAll("nav > div a")).forEach((n=>{n.classList.remove("activeTab")})),function(n){n.classList.add("activeTab")}(n)}document.addEventListener("keydown",(n=>{if("Escape"===n.key)try{const n=document.querySelector("dialog");n.close(),n.remove()}catch(n){}}));var Y=r(379),O=r.n(Y),q=r(795),T=r.n(q),M=r(569),G=r.n(M),F=r(565),P=r.n(F),Z=r(216),H=r.n(Z),D=r(589),K=r.n(D),Q=r(426),X={};X.styleTagTransform=K(),X.setAttributes=P(),X.insert=G().bind(null,"head"),X.domAPI=T(),X.insertStyleElement=H(),O()(Q.Z,X),Q.Z&&Q.Z.locals&&Q.Z.locals,function(){const n=document.querySelector("body"),r=document.querySelector("#content"),t=document.createElement("nav"),i=document.createElement("span"),a=document.createElement("div"),o=document.createElement("a"),A=document.createElement("a"),c=document.createElement("a");i.textContent="Chick'n Dip",o.textContent="Home",A.textContent="Menu",c.textContent="Location",o.href="#",A.href="#",c.href="#",n.insertBefore(t,r),t.append(i,a),a.append(o,A,c),U(o),e(r),o.addEventListener("click",(()=>{o.classList.contains("activeTab")||(U(o),e(r))})),A.addEventListener("click",(()=>{A.classList.contains("activeTab")||(U(A),function(n){const e=document.createElement("div");e.classList.add("menu","tab-page");const r=document.createElement("div"),t=document.createElement("div"),i=document.createElement("ul"),a=document.createElement("li"),o=document.createElement("li");n.textContent="",n.appendChild(e),e.append(r,t),r.appendChild(i),i.append(a,o),a.textContent="Chicken",o.textContent="Dips",S(t),a.classList.add("activeOption"),a.addEventListener("click",(()=>{a.classList.contains("activeOption")||(j(a),S(t))})),o.addEventListener("click",(()=>{o.classList.contains("activeOption")||(j(o),function(n){n.textContent="";for(let e=1;e<5;e++){const r=document.createElement("div"),t=document.createElement("img"),i=document.createElement("p"),a=document.createElement("span");switch(t.classList.add("food-image"),i.classList.add("food-title"),r.classList.add("food-card"),a.textContent="Sauce",n.appendChild(r),r.append(t,i),e){case 1:t.src=b,i.textContent="Honey Mustard";break;case 2:t.src=E,i.textContent="Spicy Barbecue";break;case 3:t.src=x,i.textContent="Garlic Aioli";break;case 4:t.src=w,i.textContent="Sweet Chili"}i.appendChild(a)}}(t))}))}(r))})),c.addEventListener("click",(()=>{c.classList.contains("activeTab")||(U(c),function(n){const e=document.createElement("div");e.classList.add("location","tab-page");const r=document.createElement("form"),t=document.createElement("label"),i=document.createElement("div"),a=document.createElement("input"),o=document.createElement("button"),A=document.createElement("iframe"),c=document.createElement("figure"),s=document.createElement("figcaption");n.textContent="",n.appendChild(e),e.append(r,c),r.append(t,a,o),c.append(s,A),t.textContent="Find Nearest Branch",i.textContent="Your Chick'n Dip Adventure Starts Here",t.appendChild(i),t.for="find",a.id="find",a.required="true",a.placeholder="enter location",o.type="submit",o.textContent="Find",s.textContent="Move/drag the map below",A.width="600",A.height="450",A.allowfullscreen="",A.loading="lazy",A.referrerPolicy="no-referrer-when-downgrade",A.src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2997.227560724951!2d-81.90409626332361!3d41.30391291160514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzE0LjEiTiA4McKwNTQnMDYuMSJX!5e0!3m2!1sen!2sph!4v1700751725684!5m2!1sen!2sph"}(r))}))}()})()})();
//# sourceMappingURL=app.bundle.js.map