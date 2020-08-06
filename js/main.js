	'use strict'


	$(window).load(function(){
		$('body').removeClass('loading');
	})

	var mySwiper = new Swiper ('.swiper-container.cover', {
		direction: 'horizontal',
		effect:'fade',
		loop:true,
		spaceBetween:20,
		 keyboard: {
        	enabled: true,
      	},
      	autoplay: {
        	delay: 25000,
        	disableOnInteraction: false,
      },
		navigation: {
			nextEl: '.next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	});

	var swiperNavBtn = $('a.prev');

	if (mySwiper.activeIndex == '1'){
		swiperNavBtn.addClass('hidden');
	}else{
		swiperNavBtn.removeClass('hidden');
	}

	var nextButton = document.getElementsByClassName('next');
	var _nextFunc = function(){
		mySwiper.SlideNext();

	}

	nextButton[0].addEventListener("click",_nextFunc);

// Shitty js dev work

var body = document.getElementsByTagName("body")[0];
var _jscontactUs = $(".contact-us")
$(".contact-tip").on('click', function(){
	_jscontactUs.toggleClass("contact-open")
	console.log("click")
})

function openWork(){
	body.classList.add("work");
	body.classList.remove("contact")
	body.classList.remove("about")
}


function openAbout(){
	body.classList.add("about")
	body.classList.remove("work")
	body.classList.remove("contact")

}


function removeBodyClasses(){
	body.classList.remove("work")
	body.classList.remove("contact")
	body.classList.remove("about")
}

function toggleMenu(){
	
	body.classList.toggle("menuOpen")
}



// Handle form
const formV = $('#contact-form')

formV.on('submit', function(e){
	e.preventDefault();
	const formData = new FormData(formV[0]);

	const name = formData.get('name');
	const number = formData.get('whatsapp-number');
	const email = formData.get('email')

	const formObject = {name,number,email};
	console.log(formObject)

	

});


// handle modal animations


// $('.close').on('click', function(e){
// 	e.preventDefault();
// 	var modal = $('.modal');
// 		modal.removeClass('slide-in-left');
// 		modal.addClass('slide-out-left');
// 		modal.css("display", "block")

// 	setTimeout(function(){
// 		modal.removeClass('slide-out-left');
// 		modal.addClass('slide-in-left');
// 		modal.css("display", "none");

// 	},1000)
// })



// form 


$('#worksModal').on('shown.bs.modal', function () {
  var worksSwiper = new Swiper('.swiper-container.works',{
	direction:'horizontal',
	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  parallax:true,
  speed:700,
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
})


// let videoElem = document.getElementById("video");
let videoElem = document.getElementsByTagName("video");
let playButton = document.getElementById("playbutton");

// $("span").parents("ul");
// $("span").parentsUntil("div");


// playButton.addEventListener("click", handlePlayButton, false);
// playVideo();


// // to start playing the video
// async function playVideo() {
//   try {
//     await videoElem.play();
//     playButton.classList.add("playing");
//   } catch(err) {
//     playButton.classList.remove("playing");
//   }
// }

// // for pausing and play

// function handlePlayButton() {
//   if (videoElem.paused) {
//     playVideo();
//   } else {
//     videoElem.pause(); 
//     playButton.classList.remove("playing");
//   }
// }








