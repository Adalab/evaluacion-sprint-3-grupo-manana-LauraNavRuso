'use strict';

// 1. FUNCIONALIDAD MENÚ LATERAL_____________
var body = document.querySelector('body');
var itemLinks = document.querySelectorAll('.menu--link');
var menuButton = document.querySelector('.menu-button')
var closeButton = document.querySelector('.close-button');

function openNavMenu() {
	body.classList.add('menu-visible');
};

function closeNavMenu() {
	body.classList.remove('menu-visible');
};

menuButton.addEventListener('click', openNavMenu);
closeButton.addEventListener('click', closeNavMenu);

for (var i=0;i < itemLinks.length;i++) {
  itemLinks[i].addEventListener('click', closeNavMenu);
}



// 2. FUNCIONALIDAD AÑADIR NUEVAS RAZONES CON PETICIÓN AJAX_____________

var reasonCounter = 4; //global variable to take into account the previous clicks on the more reasons button

function add3MoreReasons() {

	fetch('https://three-random-reasons-izwfjpgbqm.now.sh/')
	  .then(function(response){
	    return response.json();
	  })

	  .then(function(json){
	    var reasons = json.reasons;

	//first example______________________________________________-
				// var reasonsContainer = document.querySelector('.reasons--container');
				//
				// reasonsContainer.insertAdjacentHTML('beforeend', '<div>hola</div>');


	//second example______________________________________________-
			// var new3ReasonsHTML = '';
			//
			// for (var i = 0; i < 3; i++) {
			// 	var newBlock = '<div class="reasons--item item3"><h3 class="reason--title title3">Morbi dictum</h3><p class="reason--description description3">Aliquam in dolor et dolor tincidunt.</p></div>';
			//   new3ReasonsHTML+= newBlock;
			// }
			//
			// var reasonsContainer = document.querySelector('.reasons--container');
			//
			// reasonsContainer.insertAdjacentHTML('beforeend', new3ReasonsHTML);


	//third example_____________________________________________
			// var new3ReasonsHTML = '';
			//
			// for (var i = 0; i < 3; i++) {
			// 	var newBlock = '<div class="reasons--item item' + reasonCounter + '"><h3 class="reason--title title' + reasonCounter + '">Morbi dictum</h3><p class="reason--description description' + reasonCounter + '">Aliquam in dolor et dolor tincidunt.</p></div>';
			// 	new3ReasonsHTML+= newBlock;
			// 	reasonCounter+= 1;
			// }
			//
			// var reasonsContainer = document.querySelector('.reasons--container');
			//
			// reasonsContainer.insertAdjacentHTML('beforeend', new3ReasonsHTML);


//fourth example_____________________________________________
			// var new3ReasonsHTML = '';
			// var forcedTitles = ['t1','t2','t3'];
			// var forcedDescriptions = ['d1','d2','d3'];
			//
			// for (var i = 0; i < forcedTitles.length; i++) {
			// 	var newBlock = '<div class="reasons--item item' + reasonCounter + '"><h3 class="reason--title title' + reasonCounter + '">' + forcedTitles[i] + '</h3><p class="reason--description description' + reasonCounter + '">' + forcedDescriptions[i] + '</p></div>';
			// 	new3ReasonsHTML+= newBlock;
			// 	reasonCounter+= 1;
			// }
			//
			// var reasonsContainer = document.querySelector('.reasons--container');
			//
			// reasonsContainer.insertAdjacentHTML('beforeend', new3ReasonsHTML);


//fifth example_____________________________________________
			var new3ReasonsHTML = '';

			for (var i = 0; i < reasons.length; i++) {
				var newBlock = '<div class="reasons--item item' + reasonCounter + '"><h3 class="reason--title title' + reasonCounter + '">' + reasons[i].title + '</h3><p class="reason--description description' + reasonCounter + '">' + reasons[i].description + '</p></div>';
				new3ReasonsHTML+= newBlock;
				reasonCounter+= 1;
			}

			var reasonsContainer = document.querySelector('.reasons--container');

			reasonsContainer.insertAdjacentHTML('beforeend', new3ReasonsHTML);
})//cierre del último then

.catch(function(error){
	console.log('Ha sucedido un error: ' + error);
});

}; //cierre de la función add3MoreReasons

document.querySelector('.reasons--button').addEventListener('click', add3MoreReasons);
