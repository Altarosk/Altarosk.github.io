//handle nav onclick

var nagivation_elems = document.querySelectorAll(".nav li");

for(var i=0; i<navigation_elems.length; i++){
	navigation_elems[i].addEventListener("click"), function(evt){
	var curent_active_nav = document.querySelector(".nav .active");
	if(curent_active_nav.classList.length>0){
		current_active_nav.classList.remove("active");
	}

	this.classList.add("active");
	});
}