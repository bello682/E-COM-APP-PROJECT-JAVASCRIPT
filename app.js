//  For Header Navbar .
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const navbarMenu = document.getElementById("navbar");

/*
        // method 1 
bar.addEventListener('click', () => {
    // navbar.style.display = "block";
    navbar.style.right = "0";
});
*/

// method 2
if (bar) {
	bar.addEventListener("click", () => {
		navbarMenu.classList.add("active");
		// console.log("Welcome!");
	});
}

if (close) {
	close.addEventListener("click", (e) => {
		e.preventDefault();
		navbarMenu.classList.remove("active");
		// console.log("thank you!");
	});
}

//  javascript for the (singleproduct.html) clicking to change product.

const MainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

Array.from(smallImg).map((smallImage, index) => {
	smallImage.addEventListener("click", () => {
		MainImg.src = smallImage.src;
		console.log("let start with", index);
	});
});

//  javascript for the (shop.html) clicking to change product.

const pro = document.getElementsByClassName("pro");

for (let i = 0; i < pro.length; i++) {
	const promax = pro[i];
	promax.addEventListener("click", () => {
		window.location.href = "singleProduct.html";
		console.log("view:", promax, "port:", number);
	});
}
