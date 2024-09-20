//Geting values from DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let sliderDom = document.querySelector('.slider');
let SliderDom = sliderDom.querySelector('.list');
let thumbnailBorderDom = document.querySelector('.slider .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

//Creating variables for managing time 
let timeRunning = 3000;
let timeAutoNext = 8000;
let runTimeOut;

//When user didn't click on arrow button, automatic page skiping wasn't available, so I needed to implement this
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)

//I needed this for trobleshooting 
/*console.log("List items in the slider: ", SliderDom.children);
console.log("List items in the thumbnail: ", thumbnailBorderDom.children);*/

//Creating onclick actions on arrow buttons 
nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}

function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.item'); 
    let thumbnailItemsDom = document.querySelectorAll('.slider .thumbnail .item');

    //Moving current item to the end, if user click on next arrow button
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        sliderDom.classList.add('next');
    }
    
    //Moving last item to the first position, if user click on previous arrow button
    if(type === 'prev'){
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        sliderDom.classList.add('prev');
    }

    //clearing styles, when animation was loaded
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        sliderDom.classList.remove('next');
        sliderDom.classList.remove('prev');
    }, timeRunning);

    //skiping to next page
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}