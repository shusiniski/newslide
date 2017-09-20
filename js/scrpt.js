// var images=["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg","images/05.jpg"]
// a=0;
// function left() {
// 	a--;
// 	document.getElementById("img").setAttribute("src",images[a])
// }
// function right(){
// 	a++;
// 	document.getElementById("img").setAttribute("src",images[a])
// }

a=100;
function right(){
	a=a+400;
	document.getElementById("slide").style.left=a+"px";

}
function left(){
	a=a-400;
	document.getElementById("slide").style.left=a+"px";

}


// eve uc tapsiriq slide ardiciliqla firlansin ag yer gorsenmesin .ikinci saniyenen getsin slide ardicilliqla.ucuncu accordion formasinda ele mutleq 