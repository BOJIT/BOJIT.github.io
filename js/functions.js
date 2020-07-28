/*----------------------------------- Global ---------------------------------*/

const mediaQuery = window.matchMedia("(min-width: 768px)");

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
	/* Reinitialise AOS after any shuffling */
	AOS.refresh();
	}
}

/* Collect all galleries on the page */
var galleries = document.querySelectorAll('.gallery');

var masonries = [];

for(let gallery of galleries) {
	/* Initialise masonry object */
	masonries.push(new Masonry(gallery, {
		itemSelector: '.gallery-tile',
		percentPosition: true,
		gutter: margin
	}));

	/* Callback for filler generation after any rearrangement */
	masonries[masonries.length - 1].on('layoutComplete', function(){
		pushTiles(masonries[masonries.length - 1]);
	});

	/* Call layout every time a new image reloads */
	imagesLoaded(gallery).on('progress', function(){
		/* layout Masonry after each image loads */
		masonries[masonries.length - 1].layout();
	});
}

/*------------------------------ Window Events -------------------------------*/

window.onload = function() {
	/* Initialise the Animate on Scroll Library */
	AOS.init();
}

window.onresize = function() {
	/* Reset the pushes to collapsed and hidden */
	resetPushes('.gallery-push');
}
