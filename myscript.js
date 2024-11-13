function random() {
	let r = Math.floor(Math.random()*10);
	//.floor() to round sown to whole Number
	//range is 0 uup to but including 10
	let page = document.getElementById("demo");
	page.innerHTML = r;
	
	//document.getElementById("demo").innerHTML = r;
	page.style.backgroundColor = "olive";
	//document.getEdlementById("demo").style.backgroundColor = "olive";
	page.style.color = "white";
	page.style.border= "solid";
	page.style.borderColor = "red";
}
