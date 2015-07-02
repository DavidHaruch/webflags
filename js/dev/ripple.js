var buttons = document.getElementsByTagName('button');

var showRipple = function (elem,c) {
	ripple.style.backgroundColor = "#606fc7";
	if (c===1) {
		ripple.parentNode.addEventListener("mousedown", function(){
			ripple.style.transform = "scale(1.5)";
		});
	}
	else {
		ripple.style.transform = "scale(1.5)";
	}
};

var hideRipple = function (del) {
	ripple.style.backgroundColor = "transparent";
	setTimeout(function(){
		ripple.style.transform = "scale(0)";
	},del);
	return console.log('ripple hidden');
};

for (i=0;i<buttons.length;i++) {
	console.log(buttons[i]);

	buttonElem = buttons[i];

	ripple = document.createElement('span');
	ripple.className += 'ripple';
	ripple.id += 'rippleElem';

	buttonWH = Math.max(buttonElem.offsetWidth, buttonElem.offsetHeight);
	// take the larger of the button's width of height (should always be width)

	ripple.style.width = buttonWH;
	ripple.style.height = buttonWH;

	topVal = -buttonWH/4;
	leftVal = 16 + 8 + -buttonWH/4;

	ripple.style.top = topVal + "px";
	ripple.style.left = leftVal + "px";

	buttonElem.appendChild(ripple);

	buttonElem.addEventListener("mouseenter", function(e){
		showRipple(ripple,1);	
	});
	buttonElem.addEventListener("mouseleave", function(e){
		hideRipple(1200);
	});

}

