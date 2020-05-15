	'use strict'


	$(window).load(function(){
		$('body').removeClass('loading');
	})

	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		effect:'fade',
		loop:true,
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

	var nextButton = document.getElementsByClassName('next');
	var _nextFunc = function(){
		mySwiper.SlideNext();

	}

	nextButton[0].addEventListener("click",_nextFunc);

// Shitty js dev work

var body = document.getElementsByTagName("body")[0];

function openWork(){
	body.classList.add("work");
	body.classList.remove("contact")
	body.classList.remove("about")
}

function openContact(){
	body.classList.add("contact")
	body.classList.remove("work")
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


		$('.close').on('click', function(e){
			e.preventDefault();
			
			$('.modal').addClass('slide-out-left');

			setTimeout(function(){
				$('.modal').removeClass('slide-out-left');
				// $('.modal').addClass('slide-in-left');
			},10000)
		})








