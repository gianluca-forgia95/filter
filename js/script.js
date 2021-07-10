let image = document.createElement("img");

image.src = "https://www.ck12.it/wp-content/uploads/2021/07/E5pCjR4WYAcehWH.jpg";
image.style.filter = 'grayscale(5%) saturate(50%) sepia(0%) invert(0%) contrast(60%) brightness(90%) blur(0px) hue-rotate(0deg)';

let search = document.getElementById("img_div");

search.appendChild(image);

function setFilters(name) {
    let sepia = document.getElementById("sepia").value;
    let brightness = document.getElementById("brightness").value;
    let saturate = document.getElementById("saturate").value
    let invert = document.getElementById("invert").value;
    let grayscale = document.getElementById("grayscale").value;
    let hue = document.getElementById("hue-rotate").value;
    let contrast = document.getElementById("contrast").value;
    let blur = document.getElementById("blur").value;
    return image.style.filter=
        `grayscale(${grayscale}%)
        saturate(${saturate}%)
        sepia(${sepia}%)
        invert(${invert}%) 
        contrast(${contrast}%)
        brightness(${brightness}%)
        blur(${blur}px)
        hue-rotate(${hue}deg)`;
}
const pars= document.querySelectorAll('label');

for (const par of pars) {
    par.addEventListener('click', (e) => {
        e.stopPropagation();
        //console.log(par);
        //console.log(par.nextElementSibling);
        par.nextElementSibling.classList.toggle('visible');
    })
}