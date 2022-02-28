// FULL CREDIT TO JOLENE VARGA FOR THE ORIGINAL.
// CHECK IT OUT HERE - https://codepen.io/jolene-varga/pen/RwjePGN
// I REMOVED FONT AWESOME AND NORMALIZE
// I REWROTE THE JAVASCRIPT
// I ADDED SASS AND REWROTE THE STYLES
// I ALSO ADDED SOME TRANSITIONS, MADE IT RESPONSIVE AND ACCESSIBLE.

// SELECT TOPPING AND UPDATE PIZZA
let toppings = document.querySelectorAll(".topping"),
	i;

for (i = 0; i < toppings.length; ++i) {
	toppings[i].addEventListener("click", function () {
		// TOGGLE CLASS FOR CLICKED BUTTON
		this.classList.toggle("selected");

		// GET THE ID
		// console.log(this.id);
		let toppingId = this.id;

		// TARGET THE IMAGE WITH THE MATCHING ID WITH A DATA ATTRIBUTE
		let addTopping = document.querySelector("img[data-topping=" + toppingId);

		// TOGGLE THE CLASS OF THE IMAGE
		addTopping.classList.toggle("hidden");
	});
}

// NO PINEAPPLE - BECAUSE... NO!
const pineapple = document.querySelector("#pineapple");

pineapple.addEventListener("click", function () {
	// console.log("pineapple");
	alert("Are you crazy?\nYou can't put pineapple on a pizza.\nYou'll ruin it.");
	this.classList.remove("selected");
});
