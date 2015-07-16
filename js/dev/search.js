var inputTag = document.getElementById('search');
var searchButton = document.getElementById('searchButton');

var recentSearches = [];

// searchButton.addEventListener('click', function(e){
// 	search(inputTag.value);
// });
inputTag.addEventListener('keydown', function(e){
	key = e.charCode || e.which;
	if (key === 13) {
		search(inputTag.value);
		recentSearches.push(inputTag.value);
	}
});
inputTag.addEventListener('keyup', function(e){
	if (inputTag.value === '') {
		while (searchOptions.firstChild) {
			searchOptions.removeChild(searchOptions.firstChild);
		}
		return false;
	}
	key = e.charCode || e.which;
	if (key === 13) {
		console.log('enter pressed');
	}
	else if (key == 8 || key === 46) {
		searchDisplay("%");
		searchDisplay(inputTag.value);
	}
	else if (key !== 16) {
		searchDisplay("%");
		searchDisplay(inputTag.value);
	}
});

var searchDisplay = function (query) {
	searchOptions = document.getElementById('searchOptions');
	suggestions = searchOptions.childNodes;


	console.log(suggestions);

	if (query === ' ') {
		return false;
	}
	else if (query === '%') {
		while (searchOptions.firstChild) {
			searchOptions.removeChild(searchOptions.firstChild);
		}
		return false;
	}

	// possibilities array
	var poss = [];

	console.log(query);

	for (i=0;i<elemArr.length;i++) {
		elem = document.getElementById(elemArr[i]);
		titleid = "nameDispTitle" + i;
		// console.log(titleid);
		elemTitle = document.getElementById(titleid);
		// elemName = elem.textContent;
		elemName = elemTitle.textContent;
		if (elemName.includes(query)) {
			poss.push(elemName);
		}
	}
	console.log(poss);
	for (i=0;i<poss.length;i++){
		possElem = document.createElement('div');
		possElem.textContent = poss[i];
		searchOptions.appendChild(possElem);
	}

};

var search = function (query) {

	var arr = [];

	if (query === '') {
		return false;
	}

	for (j=0;j<elemArr.length;j++) {
		elem = document.getElementById(elemArr[j]);
		elemText = elem.textContent;
		if (elemText.includes(query)) {
			arr.push(elemText);
			console.log(arr);
			if (arr.length === 1) {
				console.log(arr.length);
				scrollView(elem,300);
			}
		}
		else if (!elemText.includes(query)) {
			console.log("/");
		}
		else if (query === elem.textContent) {
			console.log(arr);
			scrollView(elem,300);
		}
	}
	// if there are more than 1 option
	if (arr.length > 1) {
			console.log(arr);
			console.log("more than 1");
			presentOptions();
	}
};

function presentOptions(arr) {
	console.log(arr);
}

function scrollView (elemid,delay) {
	scrollelem = elemid;
	if (!elemid) {
		scrollelem = document.getElementById(elemid);
	}
	topAmmt = scrollelem.getBoundingClientRect();
	setTimeout(function(){
		window.scrollTo(0,(topAmmt.top - 10));
	}, delay);
}

// Decorative focus stuff

var searchDecorative = document.getElementById("searchDecorative");
var searchIcon = document.getElementById('searchIcon');
var searchIconAlt = document.getElementById('searchIconAlt');
// input tag hint text
inputTag.value = 'Search';

inputTag.addEventListener("focus",function(){
	searchGetFocus();
});
inputTag.addEventListener("blur",function(){
	searchLoseFocus();
});

function searchGetFocus () {
	// on focus add this class, look at sass/_theme.scss:~142
	searchDecorative.className = 'search-bar search-bar_focus rippled';
	// clear the input tag from the hint text
	inputTag.value = '';
	inputTag.style.color = "#111";
}

function searchLoseFocus () {
	searchDecorative.className = 'search-bar rippled';
	inputTag.value = 'Search';
	inputTag.style.color = "#aaa";
	searchIcon.style.display = "inline-block";
	searchIconAlt.style.display = "none";
	// searchIcon.style.transform = 'none';
}

