// To add a tooltip, add the .tooltipped class to the element, and 
// add a title with the tooltip content under the attribute "data-tooltip".

var tooltipped = document.querySelectorAll('.tooltipped');
for (i=0;i<tooltipped.length;i++) {

}
function tooltip () {
	for (i=0;i<tooltipped.length;i++) {
		
		var tooltipElem = document.createElement('div');
		var tooltipParent = tooltipped[i];
		tooltipElem.id = 'tooltip' + i;
		tooltipElem.className += 'tooltip';
		tooltipElem.textContent = tooltipped[i].getAttribute('data-tooltip');
		if (tooltipped[i].offsetWidth > 128) {
			tooltipElem.style.maxWidth = (tooltipped[i].offsetWidth - 32) + "px";
		}
		tooltipParent.parentNode.appendChild(tooltipElem);
		addT(tooltipElem,tooltipParent);
		rmT(tooltipElem,tooltipParent);
	}

}

function addT (elem,parent) {
	parent.addEventListener("mouseenter",function(){
		elem.style.display = "block";
		setTimeout(function(){
			elem.style.transform = "translateY(0)";
		}, 500);
		setTimeout(function(){
			elem.style.opacity = 0.5;
		}, 400);
		setTimeout(function(){
			elem.style.opacity = 1;
		}, 400);
	},false);
	
}
function rmT (elem) {
	parent.addEventListener("mouseout",function(){
		elem.style.transform = "translateY(0.5rem)";
		elem.style.display = "none";
		elem.style.opacity = 0.0;
	},false);
}

tooltip();