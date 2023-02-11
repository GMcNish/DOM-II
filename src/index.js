import './less/index.less'

// Your code goes here!
console.log("testing one two three");

let contentSection = document.querySelector(".content-section");
contentSection.addEventListener('mouseenter', (evt) => {
    evt.target.style.backgroundColor = '#17A2B8';
})
// contentSection.addEventListener('click', (evt) => {
//     evt.target.style.backgroundColor = '#FFEBCD';
// })

contentSection.addEventListener('mouseleave', (evt) => {
    evt.target.style.backgroundColor = '#FFFFFF';

})

let navLink = document.querySelector(".nav-link")

navLink.addEventListener('click', (evt) => {
    evt.target.style.backgroundColor = '#212529';
})

let destination = document.querySelectorAll(".destination");

// function mouseOver(trgt) {
//     trgt.addEventListener('mouseover', (evt) => {
//         evt.target.style.backgroundColor = 'pink'
//     })
// }

// destination.forEach(mouseOver(destination))
// // destination.forEach()addEventListener("mouseover", (evt) => {
// //     evt.target.style.backgroundColor = 'pink';
// // }
    
// // )

// 1 - load 
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'

    // 2 - copy

    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    // 3 - click 
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // 4 - dblclick
    document.body.addEventListener('dblclick', evt => {
        evt.target.outerHTML = ''
    })

    // 5 - keydown
    window.addEventListener('keydown', evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1>YOU RAN ORDER 66</h1>'
        }
    })

    // 6 - mousemove
    document.body.addEventListener('mousemove', evt => {
        const {clientX, clientY} = evt
        // console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // 7 - mouseenter
    // 8 - mouseleave
    const destinations = document.querySelectorAll('.destination')
    
    for (let destination of destinations) {
        destination.addEventListener('mouseenter', () => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', () => {
            setTimeout(() => {
                destination.style.fontWeight = 'initial'
            }, 500)
        })
    }
    const btn = document.querySelector('.btn');
    btn.addEventListener("click", (evt) => {
        console.log(evt)
        evt.preventDefault()
    })
    
} 
