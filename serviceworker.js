
// self.addEventListener('install', function(event){
// 	event.waitUntil(
// 			caches.open(cacheName).then(function(cache){
// 				return cache.addAll(['/css/bootstrap.min.css', '/css/swiper.min.css','/css/style.css','/css/responsive.min.css','index.html',
// 					'/js/jquery.min.js','/js/bootstrap.min.js','/js/swiper.js','/js/TweenMax.min.js', '/js/main.js'])
// 			})
// 		)
// })

if('serviceWorker' in navigator){
	navigator.serviceWorker.register('./serviceworker.js', {scope:'/'})
	.then(function(reg){
		console.log("sw registered at: " + reg.scope)
	}).catch(function(){
		console.log("sw registtration failed at." + reg.scope)
	})
}