function wiki (name) {
	
	nametext = name;


	find = ' ';
	takeoutspacesregex = new RegExp(find, 'g');   // find string find globally throughout
	name = name.replace(takeoutspacesregex, '_'); // replace find with selected character

	url = "http://wikipedia.org/wiki/" + name;

	wikiElem = document.createElement('a');
	wikiElem.setAttribute('href', url);
	mapsElem.setAttribute("data-ripple-color", "red");
	wikiElem.className = 'button-flat';
	wikiElem.textContent = 'wikipedia';

	contentContainer = document.getElementById('nameDispCardContent'+i);
	contentContainer.appendChild(wikiElem);

	insertClearBoth(contentContainer);

}