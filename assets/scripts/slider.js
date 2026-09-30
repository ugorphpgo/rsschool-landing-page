let current = 0;
const sliderWrapper = document.querySelector('.slider__track');
const count = document.querySelectorAll('.slide').length;
const leftButton = document.querySelector('.left__button');
const rightButton = document.querySelector('.right__button');
const controls = document.querySelectorAll('.control');

function showSlide(index){
  current = (index+count)%count;
  sliderWrapper.style.transform = `translateX(-${100*current}%)`
  controls.forEach((control,i) => {
    control.classList.toggle('active', i === current);
  })
}

// «назад» → showSlide(current - 1)
leftButton.addEventListener('click', ()=>{
  showSlide(current-1);
});
// «вперёд» → showSlide(current + 1)
rightButton.addEventListener('click',()=>{
  showSlide(current+1);
});

controls.forEach((control,i) => {
  control.addEventListener('click',()=>{
        showSlide(i);
  });
});