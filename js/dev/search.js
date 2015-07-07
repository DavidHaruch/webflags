var inputTag = document.getElementById('search');
var searchButton = document.getElementById('searchButton');

// searchButton.addEventListener('click', function(e){
// 	search(inputTag.value);
// });
inputTag.addEventListener('keydown', function(e){
	key = e.charCode || e.which;
	if (key === 13) {
		search(inputTag.value);
	}
});
inputTag.addEventListener('keyup', function(e){
	key = e.charCode || e.which;
	if (key === 13) {
		console.log('enter pressed');
	}
	else {
		searchDisplay(inputTag.value);
	}
});

var searchDisplay = function (query) {
	if (query === '') {
		return false;
	}
	var poss = [];
	console.log(query);

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
	// on focus add this class, look at sass/_theme.scss:~142
	searchDecorative.className = 'search-bar search-bar_focus';
	// clear the input tag from the hint text
	inputTag.value = '';
	inputTag.style.color = "#111";
	searchIcon.style.transform = 'rotate(320deg) translateY(4px)';
	setTimeout(function(){
		searchIcon.style.display = "none";
		searchIcon.style.transform = 'rotate(320deg) translateY(-4px)';
	}, 400);
	setTimeout(function(){
		searchIconAlt.style.display = "inline-block";
	}, 398);
});
inputTag.addEventListener("blur",function(){
	// searchDecorative.className = 'search-bar';
	// inputTag.value = 'Search';
	searchLoseFocus();
});

function searchLoseFocus (){
	searchDecorative.className = 'search-bar';
	inputTag.value = 'Search';
	inputTag.style.color = "#aaa";
	searchIcon.style.display = "inline-block";
	searchIconAlt.style.display = "none";
	searchIcon.style.transform = 'none';
}

