// <!--------------------left-tabs-js---------------------->

const leftTb = document.querySelectorAll(".tab-list-l");
const rightSec = document.querySelectorAll(".right-wrp");

leftTb.forEach((event) => {
  event.addEventListener("click", (evt) => {
    for (let i = 0; i < leftTb.length; i++) {
      leftTb[i].classList.remove("active");
    }
    event.classList.add("active");
    const getdate = evt.target.dataset.id;
    for (let i = 0; i < rightSec.length; i++) {
      rightSec[i].classList.remove("active");
      const element = rightSec[i].id;
      if (getdate == element) {
        rightSec[i].classList.add("active");
        removeCl();
        const wrpId = document.getElementById(element);
        wrpId.querySelector(".second-sec").classList.add("active");
        wrpId
          .querySelector(".tab-R-wrp li:first-child")
          .classList.add("active");
      }
    }
  });
});

// <!--------------------right-tabs-js---------------------->

const rightTb = document.querySelectorAll(".tab-list-r");
const secondsec = document.querySelectorAll(".second-sec");
rightTb.forEach((event) => {
  event.addEventListener("click", (evt) => {
    for (let i = 0; i < rightTb.length; i++) {
      rightTb[i].classList.remove("active");
    }
    event.classList.add("active");
    const getdate = evt.target.dataset.id;

    for (let i = 0; i < secondsec.length; i++) {
      secondsec[i].classList.remove("active");
      const element = secondsec[i].id;
      if (getdate == element) {
        secondsec[i].classList.add("active");
      }
    }
  });
});

function removeCl() {
  for (let i = 0; i < secondsec.length; i++) {
    secondsec[i].classList.remove("active");
  }
  for (let i = 0; i < rightTb.length; i++) {
    rightTb[i].classList.remove("active");
  }
}

// <!--------------------slider-tabs-js---------------------->

$(".multiple-items").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

const storSld = document.querySelectorAll(".slick-dots li");
const crtEl = document.createElement("div");
const slickList = document.querySelector(".slick-list");
crtEl.classList.add("slider-counter");
slickList.append(crtEl);
let storNm = 1;
crtEl.innerHTML = `${storNm} / ${storSld.length}`;
$(".multiple-items").on("afterChange", function () {
  for (let i = 0; i < storSld.length; i++) {
    if (storSld[i].classList.contains("slick-active")) {
      storNm = i + 1;
      crtEl.innerHTML = `${storNm} / ${storSld.length}`;
    }
  }
});
