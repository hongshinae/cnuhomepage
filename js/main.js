

		window.addEventListener("scroll", function() {
			let value = window.scrollY;
			console.log("scrollY", value);
			if (value > 300) {
				document.getElementById("#dd").style.display = "none";
			}
		}
	);