let element = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 53) {
    element.classList.add("header__sticky");
  } else {
    element.classList.remove("header__sticky");
  }
});


let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top > offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove('active');
      document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
      })
    }
  });
};


document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.nav');

  burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
  });
});


  const mainSlider = new Swiper('.main-slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.slider-main-pagination',
      clickable: true,
    },
  });


Fancybox.bind("[data-fancybox]", {

});


$('.items-container').readmore({
  speed: 75,
  collapsedHeight: 400,
  moreLink: '<a class="more" href="#">See more</a>',
  lessLink: '<a class="more" href="#">Close</a>',
});


let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.6686, lng: -73.8999 },
    zoom: 13.5, 
    mapId: '2f084b4895741534',
  });

  const marker = new google.maps.Marker({
    position: { lat: 40.6781, lng: -73.8981 },
    map: map,
    title: "Monticello",
    icon: {
      url: "img/Pin.svg",
      scaledSize: new google.maps.Size(100, 100),
    },
  });
}


const newsSlider = new Swiper('.swiper-news-slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.slider-news-pagination-news',
  },
  navigation: {
    nextEl: '.slider-news-button-next-news',
    prevEl: '.slider-news-button-prev-news',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


  $(".contacts-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 3
      },
      email: {
        required: true,
        email:true
      },
    },
  });