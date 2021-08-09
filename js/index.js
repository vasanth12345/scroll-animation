const intro = document.querySelector('.main');
const video = intro.querySelector('video');
const h2 = intro.querySelector('h2');

const sec = document.querySelector('.main2');
const end = sec.querySelector('h2');


const cntrl = new ScrollMagic.Controller();



let scean = new ScrollMagic.Scene({
	// height to be end
	duration: 6000,
	//element shouls animate
	triggerElemnt: intro,
	//startingin point
	triggerHook:0
})
//calling indicator
//setting video palce the video sticked
.setPin(intro)
//add cntel to scean
.addTo(cntrl);

const textAni = TweenMax.fromTo(h2, 3, {opacity: 1}, {opacity:0});

let scean2 = new ScrollMagic.Scene({
duration: 3000,
triggerElemnt: intro,
triggerHook: 0
})
.setTween(textAni)
.addTo(cntrl);

// video animation! !
let accel =1;
let scrollPosition = 0;
let delay = 0;

scean.on("update", e => {
//hear scrollPos is come form library 
scrollPosition = e.scrollPos / 1000;

});

setInterval(() => {
delay += (scrollPosition - delay) * accel;
	//console.log(scrollPosition, delay);
	video.currentTime = delay;
}, 10);