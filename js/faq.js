'use strict'
let opening = document.querySelectorAll(".accordion");
let titleClick = document.querySelectorAll(".title");

for (let i = 0; i < titleClick.length; i++) {
	titleClick[i].addEventListener("click", function () {
		for (let j = 0; j < opening.length; j++) {

			opening[j].classList.remove("active")
		}

		opening[i].classList.add("active")
	})

}
