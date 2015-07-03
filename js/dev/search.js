var inputTag = document.getElementById('search');
var searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function(e){
	search(inputTag.value);
});
inputTag.addEventListener('keydown', function(e){
	key = e.charCode || e.which;
	if (key === 13) {
		search(inputTag.value);
		showRipple();
		searchButton.className += (' button--pressed');
	}
});
inputTag.addEventListener('keyup', function(e){
	key = e.charCode || e.which;
	if (key === 13) {
		setTimeout(function(){
			hideRipple(1000);
			searchButton.className = ('button');
		}, 300);
		console.log('works');
	}
});
inputTag.addEventListener('mouseleave', function(e){
	setTimeout(function(e){
		searchTooltip = document.getElementById('searchTooltip');
		searchTooltip.parentNode.removeChild(searchTooltip);
	}, 100);
	// give it a 100ms delay on exit
});

inputTag.addEventListener('mouseenter', function(e){
	searchTooltip = document.getElementById('searchTooltip');
	if (!searchTooltip) {
		searchContainer = document.getElementById('searchContainer');
		searchContainer2 = document.getElementById('searchContainer2');
		elem = document.createElement('div');
		elem.className += 'tooltip ';
		elem.className += 'tooltip--up ';
		elem.className += 'search-tooltip';
		elem.id = 'searchTooltip';

		tooltipContent = document.createElement('span');
		tooltipContent.textContent = "type a full or partial country name";
		tooltipContent.className += 'tooltip-content';
		tooltipContent.id = 'tooltipContent';

		searchContainer2.appendChild(elem);
		elem.appendChild(tooltipContent);
	}
});


// This uses .includes, only supported in very new firefox and chrome, but it is a standard for es6

var scrollDelay = 500;

var search = function (query) {

	var arr = [];

	if (query === '') {
		return false;
	}

	for (j=0;j<elemArr.length;j++) {
		elem = document.getElementById(elemArr[j]);
		elemText = elem.textContent;
		if (elemText.indexOf(query) !== -1) {
			console.log(elemText);
			arr.push(elemText);
			if (arr.length <= 1) {
				// elem.scrollIntoView();
				// setTimeout(function(){
					elem.scrollIntoView();
				// }, scrollDelay);
			}
		}
		else if (!elemText.includes(query)) {
			console.log("nope");
		}
		else if (query === elem.textContent) {
			console.log(elem.textContent);
			// setTimeout(function(){
				elem.scrollIntoView();
			// }, scrollDelay);
		}
	}
	// if there are more than 1 option
	if (arr.length > 1) {
			console.log(arr);
			console.log("more than 1");
	}
};