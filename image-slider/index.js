const nextEl = document.querySelector(".next");

const prevEl = document.querySelector(".prev");

const imgsEl = document.querySelectorAll("img");

const imagecontainerEl = document.querySelector(".image-container");


let currentImg = 1;

let timeout;

nextEl.addEventListener("click",  ()=>{
    currentImg++
    clearTimeout(timeout);
    updateImg();
});

prevEl.addEventListener("click", ()=>{
    currentImg--
    clearTimeout(timeout);
    updateImg();
});

updateImg()

function updateImg(){
    if(currentImg > imgsEl.length){
        currentImg = 1;
    }else if (currentImg < 1){
        currentImg = imgsEl.length;
    }
    imagecontainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeoutsetTimeout(()=>{
        currentImg++
        clearTimeout(timeout);
        updateImg();
    }, 3000)
}