const ImageSection = document.querySelector('.image-section')
const title = document.querySelector('.title')
const paragraph = document.querySelector('.paragraph')


setTimeout(() => {
    const img = document.createElement("img")
    img.setAttribute('src', './-1.png')
    ImageSection.appendChild(img)

    title.textContent = "Loading Shadow With JS"

    paragraph.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia aspernatur fugiat repellendus omnis sed, aliquam voluptas sequi! Dolorem maiores voluptatum ex aspernatur libero, officiis adipisci"
    ImageSection.classList.remove('loading-shadow')
    title.classList.remove('loading-shadow')
    paragraph.classList.remove('loading-shadow')
}, 3000);