var anchors = document.getElementsByClassName('nav-link')

// Prevent url from changing
for(let i = 0; i < anchors.length; i++) {
	(function() { 
		var cache = i
		
		anchors[cache].onclick = function(e) {
			e.preventDefault()
			document.querySelector(anchors[cache].hash).scrollIntoView()
		}
	})()
}