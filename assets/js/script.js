// Mobile Navbar
const nav = document.querySelector(".bars");
const menu = document.querySelector(".menu")

nav.addEventListener("click", function(){
	console.log("hi");
	menu.classList.toggle("open")

	if(menu.classList.contains("open")){
		menu.style.maxHeight = menu.scrollHeight + "px";
	}
	else{
		menu.removeAttribute("style")
	}
})

// Testimonial Slider

// Main Slider
const galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 4
});

// Pagination Slider
const galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerView: 5, // 'auto'
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 5,
		}
	},
	
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;

// Insurance Company Slider

var swiper = new Swiper(".company-slider", {
	spaceBetween: 20,
	centeredSlides: true,
	slidesPerView: 5, // 'auto'
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		300: {
			slidesPerView: 2,
		},
		767: {
			slidesPerView: 5,
		},
		991: {
			slidesPerView: 7,
		}
	},
  });