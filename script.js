$(document).ready(function () {
	var myWidth =0;
	var myHeight =0;
	myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  console.log('Width:'+myWidth+" Height:"+myHeight);
  // if (myWidth*0.6 > myHeight){
  	var size = myWidth+"px "+myHeight+"px"
  	console.log('size: '+size);
  	document.getElementById("landerView").style.height = myHeight+"px";
  // } else {
  	console.log('Height Greater');
  	// document.getElementById("landView").style.height = myHeight+"px";
  // }
})