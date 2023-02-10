import './less/index.less'

// Your code goes here!
console.log("testing one two threen")

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

function mouseOver(trgt) {
    trgt.addEventListener('mouseover', (evt) => {
        evt.target.style.backgroundColor = 'pink'
    })
}

destination.forEach(mouseOver(destination))
// destination.forEach()addEventListener("mouseover", (evt) => {
//     evt.target.style.backgroundColor = 'pink';
// }
    
// )