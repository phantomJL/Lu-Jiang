/* JavaScript Media Queries */
if (matchMedia) {
	var mq = window.matchMedia("(min-width: 750px)");
	mq.addListener(WidthChange);
	WidthChange(mq);
}

// media query change
function WidthChange(mq) {

	var msg = (mq.matches ? "more" : "less") + " than 750 pixels";
	document.getElementById("current").firstChild.nodeValue = msg;

}