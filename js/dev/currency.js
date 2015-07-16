function addCurrency(arr) {

	currencyElem = document.createElement('div');
	currencyElem.textContent = arr[i];
	currencyElem.className = 'card-content-currency';
	currencyElem.id = "currencyLetters" + i;

	contentContainer = document.getElementById('nameDispCardContent' + i);
	contentContainer.appendChild(currencyElem);
}

function ajaxHandler(arr) {
	if (i===0) {
		ajaxcurrency();
	}
}

function actOnCurrencyAjax(json) {
	var jsonTable = json.ISO_4217.CcyTbl.CcyNtry;
	var currencyNames = json.ISO_4217.CcyTbl.CcyNtry;


	elemTextContentArr = [];
	for (i=0;i<currencyArr.length;i++) {
		var elem = document.getElementById('currencyLetters' + i);
		elemTextContentArr.push(elem.textContent);
	}
	for (i=0;i<elemTextContentArr.length;i++){
		// console.log(currencyNames[i].Ccy);
		if (currencyNames[i].Ccy === elemTextContentArr[i]) {
			console.log("test");
		}
	}

}

function ajaxcurrency() {
	var xmlhttp;
	// add a new request, IE7+
	xmlhttp = new XMLHttpRequest();

	// when its ready state changes do this stuff
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE) {
			if (xmlhttp.status == 200) {
				// sucess code goes here				
				currencyresult = JSON.parse(xmlhttp.responseText);
				
				actOnCurrencyAjax(currencyresult);

			
			} else if (xmlhttp.status == 400) {
				// fail code goes here
				alert('There was an error 400');
			} else {
				// unrecognised fail code goes here
				alert('something else other than 200 was returned');
			}
		}
	};

	// actually do the thing
	xmlhttp.open("GET", "data/currency.json", true);
	xmlhttp.send();

}