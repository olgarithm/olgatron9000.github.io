
(function () {
   "use strict";
   
   var options = {
    width: "100%",
    height: "100%",
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
	 $("resumeclick").onclick = getResume;
  };
   
  function getResume() {
    $("resume").classList.toggle("hidden");
    PDFObject.embed("pdf/Olga-Andreeva-Resume.pdf", "#resume", options);
  }
})();
