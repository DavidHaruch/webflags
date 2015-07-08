var fabE = document.getElementById('fab');

	function fabLoad () {
			setTimeout(function(){
			fabE.style.transform = 'scale(1) rotate(0deg)';
			fabE.style['-webkit-transform'] = 'scale(1) rotate(0deg)';
		}, 400);
	}

	fabE.onload = fabLoad();

	var timeout;
	function fab () {
		theBody = document.getElementById('body');
		currentScroll = theBody.scrollTop;
		// theBody.scrollTop = 0;


		if (theBody.scrollTop!==0){
			// del = currentScroll - Math.sqrt(currentScroll);
			// console.log(del);
			window.scrollBy(0,-currentScroll/5);
			timeout = setTimeout("fab()", 10);
		}
		else {
			clearTimeout(timeout);
		}
	}