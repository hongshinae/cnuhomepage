
let mainCompanyimg = document.querySelector(".main-companyimg .container");
		window.addEventListener("scroll", function() {
			let value = window.scrollY;
			console.log("scrollY", value);
			if (value > 255) {
				mainCompanyimg.style.animation = "slideInDown 1s ease-in";
			}
			else {
				mainCompanyimg.style.animation = "slideInUp 1s ease-in";
			}
		}
	);