document.querySelector(".button-search").addEventListener("click", function() {
	if (document.querySelector(".form").display="none") {
		document.querySelector(".form").style.display="block";
	}
})

document.querySelector(".close").addEventListener("click", function() {
	if (document.querySelector(".form").display="block") {
		document.querySelector(".form").style.display="none";
	}
})

document.querySelector(".close").addEventListener("click", function(evt) {
	evt.preventDefault();
})