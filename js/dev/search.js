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
			if (arr.length > 1) {
				// scrollView(elem,300);
				console.log("test");
				console.log(arr.length);
			}
		}
		else if (!elemText.includes(query)) {
			// console.log("nope");
		}
		else if (query === elem.textContent) {
			console.log(elem.textContent);
			scrollView(elem,300);
		}
	}
	// if there are more than 1 option
	if (arr.length > 1) {
			console.log(arr);
			console.log("more than 1");
			// presentOptions();
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