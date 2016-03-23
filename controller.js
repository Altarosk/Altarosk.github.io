//handle nav onclick
function init(){
	var navigation_elems = document.querySelectorAll(".nav li");
	console.log(navigation_elems);
	for(var i= 0; i < navigation_elems.length; i++){
		console.log('hello2');
		navigation_elems[i].addEventListener("click", function(){
			var current_active_nav = document.querySelector(".nav .active");
			if(current_active_nav.classList.length>0){
				current_active_nav.classList.remove("active");
			}
			this.classList.add("active");
		});
	}

}
