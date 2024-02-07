document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
		document.getElementById("loader-wrap").style.display = "none"
	}, 1000)
})

document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("pageUpButton")
		.addEventListener("click", function () {
			window.scrollTo({ top: 0, behavior: "smooth" })
		})
})
