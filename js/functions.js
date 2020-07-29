/*----------------------------------- Global ---------------------------------*/

/* Set up media query trigger for mobile websites */
const mediaQuery = window.matchMedia("(min-width: 768px)");

/* Initialise the Animate on Scroll Library */
console.log("AOS.initiated");
AOS.init();

/*-------------------------- Generate Random Article -------------------------*/

function generateArticle(currentUrl) {
	var randomIndex = Math.floor(Math.random() * ARTICLES.length);
	/* Regenerate if random article is the current article */
	while (ARTICLES[randomIndex] == currentUrl)
		randomIndex = Math.floor(Math.random() * ARTICLES.length);
	window.location.href = BASEURL + ARTICLES[randomIndex];
}

/*---------------------------------- Masonry ---------------------------------*/

/* Horizontal AND vertical spacing of the tiles */
const margin = 20;

/* Resets the pushes to collapsed and hidden */
function resetPushes(selector) {
	var pushes = document.querySelectorAll(selector);
	for(let push of pushes) {
		push.style.display = "none";
		push.style.opacity = 0;
		push.style.height = 0;
	}
}

function pushTiles(masonry) {
	/* Get all tiles in a gallery */
	var tiles = masonry.getItemElements();

	/* Reset the pushes to collapsed and hidden */
	resetPushes('.gallery-push');

	/* Only add pushes for desktop version of site */
	if(mediaQuery.matches) {
		/* Sort by position of bottom edge of tile */
		tiles.sort(function(a, b) {
			return (b.offsetTop + b.offsetHeight) - (a.offsetTop + a.offsetHeight);
		});

		for(var i = 1; i < 3; i++) {
			/* Add appropriate push height to pad the columns */
			var push = tiles[i].querySelector('.gallery-push');

			const height = (tiles[0].offsetTop + tiles[0].offsetHeight)
				- (tiles[i].offsetTop + tiles[i].offsetHeight);

			/* Show if push will exceed margin threshold */
			if(height > margin) {
				push.style.display = "block";
				push.style.height = String(height - margin) + "px";
				push.style.animation = "fade 1.5s";
				push.style.opacity = 1;
			}
		}
	}
}

/* Collect all galleries on the page */
var galleries = document.querySelectorAll('.gallery');

var masonries = [];

for(let i = 0; i < galleries.length; i++) {
	/* Initialise once all the images have loaded */
	imagesLoaded(galleries[i], function() {

		galleries[i].style.display = "block";

		/* Initialise masonry object */
		masonries[i] = new Masonry(galleries[i], {
			itemSelector: '.gallery-tile',
			percentPosition: true,
			gutter: margin
		});
	
		/* Callback for filler generation after any rearrangement */
		masonries[i].on('layoutComplete', function() {
			pushTiles(masonries[i]);
			//galleries[i].style.visibility = "visible";
			console.log("Hello");
			AOS.refresh();
		});

		/* Actually fire the layout */
		masonries[i].layout();
	});
}

/*------------------------------ Window Events -------------------------------*/

// window.onload = function() {
// }

window.onresize = function() {
	/* Reset the pushes to collapsed and hidden */
	resetPushes('.gallery-push');
}
