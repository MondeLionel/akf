	'use strict'




	$(window).load(function(){
		setTimeout(function(){
			// e.preventDefault();
			$('body').removeClass('loading');

		}, 1000)
			
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


function pauseVid(){
	$("video").trigger("pause");
}


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
 


let textA = $('.hideText');
let workText = $('.content h3');
let workDate = $('.content h1');

let tl = new TimelineMax({paused:true});
tl.staggerTo(textA, 1.1,{top:'0%',ease:Power4.easeOut}, 0.1,5)
tl.from('.c-link', 1,{opacity:'0',ease:Power4.easeIn},5)

let worktl = new TimelineMax({paused:true})

worktl.from(workText, 1,{y:'100%',ease:Power4.easeOut},1)
worktl.from(workDate, 1,{y:'100%',ease:Power4.easeOut},1.2)


$('#aboutModal').on('shown.bs.modal', function(){
	// play falcon cries
	$('#falcon-audio').trigger('play');
	
		tl.play()
	

// initialise swiper
	var aboutSwiper = new Swiper('.swiper-container.about-swiper',{
		direction:'vertical',
		speed:500,
		 keyboard:{
		 	enabled:true,
		 	onlyInViewport: false,
		 }
	  }
	)})


$('#worksModal').on('shown.bs.modal', function () {
	if(sessionStorage.getItem("audio_prompt") != null || sessionStorage.getItem("audio_prompt") != undefined){
		$("body").removeClass("video-prompt")
	}else{
		$("body").addClass("video-prompt");
	}

	worktl.play()


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
  on:{
  	init: function(){
  			let current_video = $('.swiper-slide-active').find("video");
			let other_videos = $('swiper-slide').find("video");
			current_video.trigger('play');
  	}
  }
})

// play video on slide


// current_video.trigger('play');
let current_video = $('.swiper-slide-active').find("video");

worksSwiper.on("slideChange", function(){
	// pause video on slide change
	let allVideos = $('.swiper-slide').find("video");

	// for(var video in allVideos){
		
	// }
	let newVids = Object.entries(allVideos)
	
	newVids.forEach(function(item,index){
			// console.log(item.paused)

	})


	// console.log("slidechanges");
})

// whoosh video on closing modal
$('.close').on('click', pauseVid())


// play video after click
$("video").on('click', function(){
	this.paused ? this.play() : this.pause();
})



// initialise videos with videojs




})



// handle prompt

$(".prompt-clear").on('click', function(){
	$("body").removeClass("video-prompt")
	sessionStorage.setItem('audio_prompt', 'seen');		
})


$("#bulb").on("click", function(){
	let _this = $(this)
	_this.toggleClass("on");
	$(".anim-text").toggleClass("off")
})








