let accordions = document.getElementsByClassName("accordion");

for(let counter=0; counter<accordions.length; counter++){
	accordions[counter].addEventListener("click",showPanel);
}

function showPanel(){
	this.classList.toggle("active");
	panel = this.nextElementSibling;
	if(panel.style.maxHeight) {
		panel.style.maxHeight = null;
	} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
	}
}