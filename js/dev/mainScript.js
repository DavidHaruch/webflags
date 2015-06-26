// function to remove (almost) any element
// uses ELEM.parentNode.removeChild(ELEM)
// Works with class, tag, id, and already defined varibles

var removeElementNow = function(elemID){
	if (document.getElementById(''+ elemID +'') === true) {
		cwi = document.getElementById('elemID');	
		// if its an ID
		cwi.parentNode.removeChild(cwe);
	}
	else if (typeof elemID !== undefined) {
		elemID.parentNode.removeChild(elemID);
		// if its already a variable
	}
	else if (document.querySelectorAll('.' + elemID + '') === true) {
		cwc = document.querySelectorAll('.' + elemID + '');
		// if its a class
		cwi.parentNode.removeChild(cwc);
	}
	else {
		// if its an unknown format
		console.log('unknown format');
	}
};

function actOnJSON(input) {
	var JSON = input;
	for (i=0;i<JSON.length;i++) {
		name = JSON[i].name.common;
		nameDisp = document.createElement('div');
		nameDisp.id = 'nameDisp' + i;
		nameDisp.className += 'nameDisp';
		nameDisp.innerHTML = name;
		document.getElementById('body').appendChild(nameDisp);
	}
	return JSON;
}


var spinHideO = 64;

function SpinLoop () {

setTimeout(function() {
	spinText = document.getElementById('spinnerText');
	spin = document.getElementById('spinner');
	spin.style.opacity = (spinHideO/64);
	
	spinHideO--;
	if (spinHideO > spin.scrollHeight) {
		SpinLoop();
	}
	else {
		// spin.parentNode.removeChild(spin);
		removeElementNow(spin);
		// spinText.parentNode.removeChild(spinText);
		removeElementNow(spinText);
		console.log('removed spinner');
	}
}, 10);

}

// AJAX code - gets countries.min.json async style
var result;
var finished = false;
var AJAXcountries = function () {
	var xmlhttp;
	// add a new request, IE7+
	xmlhttp = new XMLHttpRequest();

	// when its ready state changes do this stuff
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200){
				// sucess code goes here
				
				result = JSON.parse(xmlhttp.responseText);
				actOnJSON(result);
				SpinLoop();
			}
			else if(xmlhttp.status == 400) {
				// fail code goes here
				alert('There was an error 400');
			}
			else {
				// unrecognised fail code goes here
				alert('something else other than 200 was returned');
			}
		}
		else if (xmlhttp.readyState == 1){
			console.log('300');
		}
	};

	// actually do the thing
	xmlhttp.open("GET", "data/countries.min.json", true);
    xmlhttp.send();
};

AJAXcountries();
