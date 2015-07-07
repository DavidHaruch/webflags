// /////////////////////////////////////
// OLD CODE BELOW
// ONLY FOR REFERENCE
// ////////////////////////////////////
// ////////////////////////////////////

// var buttons = document.getElementsByTagName('button');

// var showRipple = function (elem,c) {
// 	ripple.style.backgroundColor = "#606FC7";
// 	if (c===1) {
// 		ripple.parentNode.addEventListener("mousedown", function(){
// 			ripple.style.top = getClickY(event) - buttonH + "px";
// 			ripple.style.right = -getClickX(event) + buttonW/2 + "px";
// 			ripple.style.transform = "scale(2.5)";
// 		});
// 	}
// 	else {
// 		ripple.style.transform = "scale(2.5)";
// 	}
// };

// var hideRipple = function (del) {
// 	ripple.style.backgroundColor = "transparent";
// 	setTimeout(function(){
// 		ripple.style.transform = "scale(0)";
// 	},del);
// 	return console.log('ripple hidden');
// };

// function getClickY (event) {
// 	button = document.getElementsByTagName("button");
// 	var rect = button[0].getBoundingClientRect();
    
//     var y = event.clientY - rect.top;
    
//     return y;
// }

// function getClickX (event) {
// 	button = document.getElementsByTagName("button");
// 	var rect = button[0].getBoundingClientRect();
//     var x = event.clientX - rect.left;
    
    
//     return x;	
// }

// for (i=0;i<buttons.length;i++) {
	
// 	buttonElem = buttons[i];

// 	ripple = document.createElement('span');
// 	ripple.className += 'ripple';
// 	ripple.id += 'rippleElem';

// 	buttonW = buttonElem.offsetWidth;
// 	buttonH = buttonElem.offsetHeight;
// 	buttonWH = Math.max(buttonElem.offsetWidth, buttonElem.offsetHeight);
// 	// take the larger of the button's width of height (should always be width)

// 	ripple.style.width = buttonWH;
// 	ripple.style.height = buttonWH;

// 	topValToCenter = -buttonWH/4;
// 	leftValToCenter = 16 + 8 + -buttonWH/4;

// 	topValToTop = 0;
// 	leftValToLeft = buttonW/2;

// 	// ripple.style.bottom = topValToTop + "px";
// 	// ripple.style.right = leftValToLeft + "px";

// 	buttonElem.appendChild(ripple);

// 	buttonElem.addEventListener("mouseenter", function(e){
// 		ripple.style.transform = "scale(0)";
// 		showRipple(ripple,1);
// 	});
// 	buttonElem.addEventListener("mouseleave", function(e){
// 		hideRipple(1200);
// 	});

// }

