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
		elem = document.createElement('div');
		elem.className += 'tooltip ';
		elem.className += 'tooltip--up ';
		elem.className += 'search-tooltip';
		elem.id = 'searchTooltip';

		tooltipContent = document.createElement('span');
		tooltipContent.textContent = "type a full or partial country name";
		tooltipContent.className += 'tooltip-content';
		tooltipContent.id = 'tooltipContent';

		searchContainer.appendChild(elem);
		elem.appendChild(tooltipContent);
	}
});


// This uses .includes, only supported in new firefox and chrome, but it is a standard for es6

var search = function (query) {

	var arr = [];

	if (query === '') {
		return false;
	}

	for (j=0;j<elemArr.length;j++) {
		elem = document.getElementById(elemArr[j]);
		elemText = elem.textContent;
		if (elemText.includes(query)) {
			console.log(elemText);
			arr.push(elemText);
		}
		else if (!elemText.includes(query)) {
			console.log("nope");
		}
		else if (query === elem.textContent) {
			console.log(elem.textContent);
			// elem.scrollIntoView();
		}
	}
	// if there are more than 1 option
	if (arr.length > 1) {
			console.log(arr);
			console.log("more than 1");
	}
};