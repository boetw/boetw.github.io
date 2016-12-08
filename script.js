$(document).ready(function () {
	var myWidth =0;
	var myHeight =0;
	myWidth = window.innerWidth;
  myHeight = window.innerHeight;
  console.log('Width:'+myWidth+" Height:"+myHeight);
  	var size = myWidth+"px "+myHeight+"px"
  	console.log('size: '+size);
  	document.getElementById("landerView").style.height = myHeight+"px";
  	document.getElementById("parallax").style.height = myHeight+"px";
    document.getElementById('size').innerHTML="Width:"+myWidth+" Height:"+myHeight;
})