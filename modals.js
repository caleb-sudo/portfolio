const images = document.querySelectorAll(".pic img");
let imgIndex;
let imgSrc;
let imgAlt;

images.forEach((img, i) => {
    img.addEventListener("click", (event) => {
        imgSrc = event.target.src;
        imgAlt = event.target.alt;
        imgModal(imgSrc, imgAlt);
        imgIndex = i;
})});

let imgModal = (src, alt) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector(".main").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("class", "modalImg");
    newImage.setAttribute("src", src);
    newImage.setAttribute("alt", alt);
    const caption = document.createElement("figcaption");
    caption.setAttribute("class", "caption");
    caption.textContent = newImage.alt;
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times closeBtn");
    closeBtn.onclick = () => {
        modal.remove();
    };
    /*if (onkeyup === Escape) {
        modal.remove();
    }*/
    const nextBtn = document.createElement("i");
    nextBtn.setAttribute("class", "fas fa-angle-right nextBtn");
    nextBtn.onclick = () => {
        newImage.setAttribute("src", nextImg());
    };
    const prevBtn = document.createElement("i");
    prevBtn.setAttribute("class", "fas fa-angle-left prevBtn");
    prevBtn.onclick = () => {
        newImage.setAttribute("src", prevImg());
    };
    modal.append(newImage, closeBtn, nextBtn, prevBtn, caption);
};
let nextImg = () => {
    imgIndex++;
    if (imgIndex >= images.length) {
        imgIndex = 0;
    };
    return images[imgIndex].src;
};
let prevImg = () => {
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = images.length - 1;
    };
    return images[imgIndex].src;
};

