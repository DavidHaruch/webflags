var fabE = document.getElementById('fab');

		function fabLoad () {
			setTimeout(function(){
			fabE.style.transform = 'scale(1) rotate(0deg)';
			fabE.style['-webkit-transform'] = 'scale(1) rotate(0deg)';
		}, 400);
	}

	fabE.onload = fabLoad();

	function fab () {
		theBody = document.getElementById('body');
		currentScroll = theBody.scrollTop;
		theBody.scrollTop = 0;
	}