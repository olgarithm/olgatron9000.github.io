(function () {
   "use strict";
   
   var options = {
    width: "1395px",
    height: "1125px",
    pdfOpenParams: {
        toolbar: 0
      }
   };

	// Given an id, returns the corresponding element
	function $(id) { return document.getElementById(id); }

	// Given a selector, returns all the elements that match that selection
	function qsa(sel) { return document.querySelectorAll(sel); }

	// Give a selector, returns the first element that matches that selection
	function qs(sel) { return document.querySelector(sel); }
   
	window.onload = function() {
	 PDFObject.embed("pdf/Rotten-Tomatoes-Infographic.pdf", "#infographic", options);
  	};
})();
