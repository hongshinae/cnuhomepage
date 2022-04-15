let maintext = document.querySelector("h1");

		window.addEventListener("scroll", function() {
			let value = window.scrollY;
			console.log("scrollY", value);
			if (value > 300) {
				document.maintext.style.display = "none"
			}
        
	// 		} else{
    //     maintext.style.margin = "200px"
    //   }
		}
		);