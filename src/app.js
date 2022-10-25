const ham = document.querySelector(`#hemnburger`);
const navLink = document.querySelector(`.mav-bar_link_container`);
const body = document.querySelector(`body`);
const navClose = document.querySelector(`.nav-bar_close`);
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");
const cart = document.querySelector(`.nav-bar_cart`);
const cartPopUp = document.querySelector(`.cart_pop_up`);
const mobilePopup = document.querySelector(`.mobile_cart_view`);
const cartCountr = document.querySelector(`.number-of_counter`);
const plus = document.querySelector(`.number-of__plus`);
const minus = document.querySelector(`.number-of__minus`);
const btnCart = document.querySelector(`.btn_cart`);
const emptyCart = document.querySelector(`.cart_pop_up_empty_container`);
const cartCountItems = document.querySelector(`#cart_count_items`);
const cartFullcontainer = document.querySelector(
	`.cart_pop_up__cart__contennet_container`
);
const calculatePrice = document.querySelector(
	`#cart_pop_up__cart__contennet__calculate__price`
);
const checkOutBtn = document.querySelector(
	`.cart_pop_up__cart__contennet__Cheakout_container`
);
const navBarCounter = document.querySelector(`.nav-bar_counter`);
const cartBin = document.querySelector(`.cart_pop_up__cart__contennet__bin`);
const mobileCartViewEmpty = document.querySelector(
	`.mobile_cart_view__empty_container`
);
const mobileCartViewFull = document.querySelector(
	`.mobile_cart_view__full_container`
);

const mobileCartViewCounter = document.querySelector(
	`#mobile_cart_view__counter`
);

const mobileCartViewFullprice = document.querySelector(
	`#mobile_cart_view__fullPrice`
);
const promoCode = document.querySelector(
	`.cart_pop_up__cart__contennet__Cheakout_container__promocode`
);
const promoCodeValue = document.querySelector(`#promo_code`);

const mobilebin = document.querySelector(`.mobile_cart_view__bin`);

const imgTumbNails = document.querySelectorAll(`.img_tumpnnail`);
const mainImg = document.querySelector(`#main-img`);
const slidesImges = document.querySelectorAll(`.slides_imges`);
const cheakOutCartBtn = document.querySelector(
	`.cart_pop_up__cart__contennet__Cheakout_container`
);
const apply = document.querySelector(`#apply`);
const mobileCartPromo = document.querySelector(`#mobile_cart_view_promo`);
const mobileApply = document.querySelector(`#mobile_cart_view__apply`);
let windowW = "";

const cartBinHanddler = () => {
	emptyCart.classList.remove(`dinsplay_none`);
	cartFullcontainer.classList.add(`dinsplay_none`);

	navBarCounter.innerText = 0;
	navBarCounter.classList.add(`dinsplay_none`);
	checkOutBtn.classList.add(`dinsplay_none`);
	cartCountr.innerText = 0;
	promoCode.classList.add(`dinsplay_none`);
};

const mobileBinHanddler = () => {
	emptyCart.classList.remove(`dinsplay_none`);
	cartFullcontainer.classList.add(`dinsplay_none`);

	navBarCounter.innerText = 0;
	navBarCounter.classList.add(`dinsplay_none`);
	checkOutBtn.classList.add(`dinsplay_none`);
	cartCountr.innerText = 0;
	mobileCartViewEmpty.classList.remove(`dinsplay_none`);
	mobileCartViewFull.classList.add(`dinsplay_none`);
};

const btnCartHanddler = (e) => {
	if (cartCountr.innerText > 0) {
		emptyCart.classList.add(`dinsplay_none`);
		mobileCartViewEmpty.classList.add(`dinsplay_none`);
		mobileCartViewFull.classList.remove(`dinsplay_none`);
		mobileCartViewCounter.innerText = `x` + cartCountr.innerText;
		mobileCartViewFullprice.innerText = calculatePrice.innerText = `$ ${
			cartCountr.innerText * 125
		}.00`;
		cartFullcontainer.classList.remove(`dinsplay_none`);
		checkOutBtn.classList.remove(`dinsplay_none`);
		cartCountItems.innerText = `x` + cartCountr.innerText;
		calculatePrice.innerText = `$ ${cartCountr.innerText * 125}.00`;
		navBarCounter.innerText = cartCountr.innerText;
		navBarCounter.classList.remove(`dinsplay_none`);
		promoCode.classList.remove(`dinsplay_none`);
	}
};

const plusHandler = () => {
	cartCountr.innerText++;
};
const minusHandler = () => {
	if (cartCountr.innerText > 0) {
		cartCountr.innerText--;
	}
};

const cartHanddler = (e) => {
	if (document.documentElement.clientWidth > 600) {
		e.cancelBubble = true;
		cartPopUp.classList.toggle(`display_block`);
	} else {
		mobilePopup.classList.toggle(`display_block`);
		e.cancelBubble = true;
	}
};

slides.forEach((slide, indx) => {
	slide.style.transform = `translateX(${indx * 100}%)`;
	let curSlide = 0;

	// select next slide button
	const nextSlide = document.querySelector(".btn-next");

	// add event listener and next slide functionality
	nextSlide.addEventListener("click", function () {
		curSlide++;

		slides.forEach((slide, indx) => {
			slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
		});
	});
});
const hamHandler = () => {
	navLink.classList.add(`nav_show`);
	body.classList.add(`body_change`);
};

const closeHandller = () => {
	navLink.classList.remove(`nav_show`);
	body.classList.remove(`body_change`);
};

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
	// check if current slide is the last and reset current slide
	if (curSlide === maxSlide) {
		curSlide = 0;
	} else {
		curSlide++;
	}

	//   move slide by -100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

// select prev slide button

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
	// check if current slide is the first and reset current slide to last
	if (curSlide === 0) {
		curSlide = maxSlide;
	} else {
		curSlide--;
	}

	//   move slide by 100%
	slides.forEach((slide, indx) => {
		slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
	});
});

ham.addEventListener(`click`, hamHandler);
navClose.addEventListener(`click`, closeHandller);
cart.addEventListener(`click`, cartHanddler);
plus.addEventListener(`click`, plusHandler);
minus.addEventListener(`click`, minusHandler);
btnCart.addEventListener(`click`, btnCartHanddler);
cartBin.addEventListener(`click`, cartBinHanddler);
cartPopUp.addEventListener(`click`, (e) => {
	e.stopPropagation();
});

mobilebin.addEventListener(`click`, mobileBinHanddler);

for (let img of imgTumbNails) {
	img.addEventListener(`click`, () => {
		if (img.classList.contains(1)) {
			mainImg.src = `./images/image-product-1.jpg`;
		} else if (img.classList.contains(2)) {
			mainImg.src = `./images/image-product-2.jpg`;
		} else if (img.classList.contains(3)) {
			mainImg.src = `./images/image-product-3.jpg`;
		} else {
			mainImg.src = `./images/image-product-4.jpg`;
		}
	});
}

apply.addEventListener(`click`, (e) => {
	if (promoCodeValue.value === `Thank_you_for_visiting`) {
		calculatePrice.innerText = `Free`;
	} else {
		alert(`Not a vaild code`);
	}
});

mobileApply.addEventListener(`click`, (e) => {
	if (mobileCartPromo.value === `Thank_you_for_visiting`) {
		mobileCartViewFullprice.innerText = `Free`;
	} else {
		alert(`Promo Code not Vaild`);
	}
});
