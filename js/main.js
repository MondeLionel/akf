	'use strict'


	$(window).load(function(){
		$('body').removeClass('loading');
	})

	var mySwiper = new Swiper ('.swiper-container', {
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

$('#contactForm').on('submit', function(e){
	e.preventDefault();
	var contactForm = $('#contactForm');
	let _username = $('#firstName').val();
	let _useremail = $('#emailAddress').val();
	let _contactMessage = $('#contactMessage').val();
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








