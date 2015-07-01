// function to remove (almost) any element
// uses ELEM.parentNode.removeChild(ELEM)
// Works with class, tag, id, and already defined varibles

var elemArr = [];

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

//  warning, excessive use of caps beacuse RAGE!!!
//
//  THIS IS LITERALLY CAUSED BY WINDOWS NOT BEING ABLE
//  TO HANDLE A DIRECTORY WITH 1000s OF FILES
//  
//  WIKIPEDIA CANT STORE ALL THIER IMAGES IN AN SINGLE DIRECTORY,
//  THEY HAVE TO DIVIDE THE IMAGES BY AN MD5 HASH AND TAKE THE
//   1ST THEN 1ST AND 2ND OF THE HASH
// 
//   WHY CANT THE WORLD JUST USE LINUX AND MAKE MY STUPID FLAG PROJECT EASIER!!!!
//
//   /rant
// 
// This will just get minified out, but if anyone sees this, hi! enjoy my rant!

function imgMd5 (countryName) {

// add in order of "NAME", "NAME OF COUNTRY OF FLAG TO REPLACE WITH",
need_replace = [
	'Bouvet Island', 'Norway',
	'Guadeloupe', 'France',
	'Isle of Man', 'Isle of Mann',
	'Timor-Leste', 'East Timor',
	'Mayotte', 'Mayotte (local)',
	'Saint Martin', 'France',
	'South Georgia', 'South Georgia and the South Sandwich Islands',
	'Saint Pierre and Miquelon', 'France',
	'Svalbard and Jan Mayen', 'Norway',
	'Heard Island and McDonald Islands', 'Australia',
	'United States Minor Outlying Islands', 'United States',
	'China', "People's Republic of China",
	'Åland', 'Åland',
	'Micronesia', 'Federated States of Micronesia',
];

for (j=0;j<need_replace.length;j++) {
	if (j%2 === 0 && countryName == need_replace[j]) {
		countryName = need_replace[j+1];
	}
}

// 'the'
needthe_include = [
	'United',
	'French Southern',
	'Czech',
	'Dominican',
	'Marshall',
	'Mariana',
	'Central',
	'Cook Islands',
	'Cayman',
	'Faroe Islands',
	'Falkland',
	'Indian',
	'Solomon',
	'Isle of Mann',
	'Pitcairn',
	'Vatican',
	'British Virgin',
	'China',
	'Micronesia',
];

for (j=0;j<needthe_include.length;j++) {
	if ( countryName.includes(needthe_include[j]) ) {
		countryName = 'the ' + countryName;
	}
}
needthe_name = [
	'Bahamas',
	'Netherlands',
	'Philippines',
	'Turks and Caicos Islands',
	'Republic of the Congo',
	'Comoros'
];
for (j=0;j<needthe_name.length;j++) {
	if (countryName == needthe_name[j]) {
		countryName = 'the ' + countryName;
	}
}

needThe_name = [
	'Gambia'
];

for (j=0;j<needThe_name.length;j++) {
	if (countryName == needThe_name[j]) {
		countryName = 'The ' + countryName;
	}
}

///////////////////////////////////////////////////////////////

function fixURL (input) {
	return encodeURIComponent(input);
}
function fixedEncodeURIComponent (str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

	var find = ' ';
	var spaceRegEx = new RegExp(find, 'g');

	countryName = countryName.replace(spaceRegEx, '_');

	if (countryName.includes("China")) {
		countryName = fixURL(countryName);
	}

	svg = new Image();
	wikipediaPageUrl = 'http://wikipedia.org/wiki/Flag_of_'+ countryName +'#/media/File:Flag_of_'+ countryName +'.svg';
	wikipediaBaseFileUrl = 'Flag_of_'+ countryName +'.svg';
	fileUrlMd5 = md5(wikipediaBaseFileUrl);


	wikiMdSlash1 = fileUrlMd5.charAt(0);
	wikiMdSlash2 = fileUrlMd5.substring(0,2);

	finalFileName = 'http://upload.wikimedia.org/wikipedia/commons/'+ wikiMdSlash1 +'/'+ wikiMdSlash2 +'/Flag_of_'+ countryName +'.svg';

	svg.src = finalFileName;

	// These are for the ones I cant seem to fix programaticaly
	// this needs to be fixed
	// this is equivalent to absolute file paths AKA - VERY BAD
	if (countryName.includes("Åland")) {
		svg.src = "http://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg";
	}
	if (countryName.includes("Cocos")) {
		svg.src = "http://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_%28Keeling%29_Islands.svg";	
	}
	if (countryName.includes("Taiwan")) {
		svg.src = "http://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg";
	}
	if (countryName.includes("DR")) {
		svg.src = "http://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg";
	}
	if (countryName.includes("Ivory")) {
		svg.src = "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg";
	}
	if (countryName.includes("Barthélemy")) {
		svg.src = "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_Saint_Barthelemy_%28local%29.svg";
	}
	if (countryName.includes("São")) {
		svg.src = "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg";
	}
	////

	svg.className += 'svgFlag';

	document.getElementById('nameDisp' + i).appendChild(svg);
	elemArr.push('nameDisp' + i);
}

function actOnJSON(input) {
	var JSON = input;
	for (i=0;i<JSON.length;i++) {
		name = JSON[i].name.common;

		nameDisp = document.createElement('div');
		nameDisp.id = 'nameDisp' + i;
		nameDisp.className += 'nameDisp';
		nameDisp.innerHTML = name;

		document.getElementById('main').appendChild(nameDisp);

		imgMd5(name);
	}
	return JSON;
}

var addDotsNum = 0;

function rmDots () {
	a = document.getElementById('spinnerText');
	a.textContent = 'Loading';
}

function addDots () {

setTimeout(function() {

	load = document.getElementById('spinnerText');
	loadText = load.textContent;

	load.textContent += ' .';

	addDotsNum++;
	if (addDotsNum < 4) {
		addDots();
	}
	else {
		rmDots();
		addDots();
		addDotsNum = 0;
	}

}, 700);

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
		// console.log('removed spinner');
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
			addDots();
		}
	};

	// actually do the thing
	xmlhttp.open("GET", "data/countries.min.json", true);
	xmlhttp.send();
};

AJAXcountries();
