


(function(){
const body = document.querySelector('body')
      //   var startPos;
      //   var startPosLat;
      //   var startPosLong;
      //   var distance;
      
      //   if (navigator.geolocation) {

      //     startPosLat = -299.91708;
      //     startPosLong = 30.97528;

      //     // $("#startLat").text(startPosLat);
      //     // $("#startLon").text(startPosLong);
      
      //     navigator.geolocation.getCurrentPosition(function(position) {
      //       console.log(position.coords.latitude + " is my current latitude");
      //       console.log(position.coords.longitude+ " is my current longitude");

      //       distance = calculateDistance(startPosLat, startPosLong,position.coords.latitude, position.coords.longitude)
      //      console.log(distance);

      //       if(distance < .05){
      //         console.log("Yes, were inside .05 KM!!! :) A+")
      //       } 
      //       if(distance > .05){
      //         console.log("No, not inside .05 KM :(")
      //          body.classList.add("out--perimeter");
      //          var overlay = document.createElement("div")
      //          overlay.classList.add('fire')
      //          overlay.innerHTML="<H1>YOU CANNOT WATCH THE STREAM HERE. YOU NEED TO GO TO MONTCLAIR</H1>"
      //          body.appendChild(overlay)
      //       }
      //     });
      //   }
      
      // // Reused code - copyright Moveable Type Scripts - retrieved May 4, 2010.
      // // http://www.movable-type.co.uk/scripts/latlong.html
      // // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
      // function calculateDistance(lat1, lon1, lat2, lon2) {
      //   var R = 6371; // km
      //   var dLat = (lat2-lat1).toRad();
      //   var dLon = (lon2-lon1).toRad();
      //   var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      //           Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
      //           Math.sin(dLon/2) * Math.sin(dLon/2);
      //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      //   var d = R * c;
      //   return d;
      // }
      // Number.prototype.toRad = function() {
      //   return this * Math.PI / 180;
      // }
})()
	


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
let homeText = $('.promoAnim');
let menuItem = $('.menuItem');

let tl = new TimelineMax({paused:true});
tl.staggerTo(textA, 1.1,{top:'0%',ease:Power4.easeOut}, 0.1,5)
tl.from('.c-link', 1,{opacity:'0',ease:Power4.easeIn},5)

let worktl = new TimelineMax({paused:true})

worktl.from(workText, 1,{y:'100%',ease:Power4.easeOut},1)
worktl.from(workDate, 1,{y:'100%',ease:Power4.easeOut},1.2)


let trTl = new TimelineMax({paused:true})
trTl.fromTo('.page--load', 2,{opacity:0, display:'none'}, {opacity:1,display:'block'})

let hometl = new TimelineMax({})


hometl.fromTo(homeText, 1,{
	y:"100px", 
	ease:Power4.easeIn
},{
	y:"0px", 
},1)


hometl.staggerFrom('.menuItem',1,{
	y:"100px", 
	ease:Power4.easeIn
},{
	y:"0px"
},2)






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








