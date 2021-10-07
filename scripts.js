$("#popular-carousel").carousel({ interval: 1e4 }),
  $("#popular-carousel .carousel-item").each(function () {
    var e = $(this).next();
    e.length || (e = $(this).siblings(":first")),
      e.children(":first-child").clone().appendTo($(this));
    for (var s = 0; s < 3; s++)
      (e = e.next()).length || (e = $(this).siblings(":first")),
        e.children(":first-child").clone().appendTo($(this));
  }),
  $("#latest-carousel").carousel({ interval: 1e4 }),
  $("#latest-carousel .carousel-item").each(function () {
    var e = $(this).next();
    e.length || (e = $(this).siblings(":first")),
      e.children(":first-child").clone().appendTo($(this));
    for (var s = 0; s < 3; s++)
      (e = e.next()).length || (e = $(this).siblings(":first")),
        e.children(":first-child").clone().appendTo($(this));
  });
class UI {
  constructor() {
    (this.testimonialLoader = document.querySelector("#testimonial-loader")),
      (this.testimonialCarousel = document.querySelector(
        "#testimonial-carousel"
      )),
      (this.testimonialCarouselInner = document.querySelector(
        "#testimonial-carousel .carousel-inner"
      )),
      (this.popularLoader = document.querySelector("#popular-loader")),
      (this.popularCarousel = document.querySelector("#popular-carousel")),
      (this.popularCarouselInner = document.querySelector(
        "#popular-carousel .carousel-inner"
      )),
      (this.latestLoader = document.querySelector("#latest-loader")),
      (this.latestCarousel = document.querySelector("#latest-carousel")),
      (this.latestCarouselInner = document.querySelector(
        "#latest-carousel .carousel-inner"
      )),
      (this.keywordsField = document.querySelector("#keywords")),
      (this.topicField = document.querySelector("#topic")),
      (this.sortField = document.querySelector("#sort-by")),
      (this.coursesLoader = document.querySelector("#courses-loader")),
      (this.numberCourses = document.querySelector("#courses-loader + h6")),
      (this.courseListing = document.querySelector("#course-listing"));
  }
  showTestimonials(e) {
    e.forEach((e) => {
      const s = document.createElement("div");
      s.classList.add("carousel-item"),
        (s.innerHTML = `\n        <div class="d-flex align-items-center pt-5">\n          <img src="${e.pic_url}" alt="${e.name} Avatar" class="rounded-circle">\n          <div class="text-white testimonial-text">\n            <h4>${e.text}</h4>\n            <p class="font-weight-bold">${e.name}</p>\n            <p class="font-italic">${e.title}</p>\n          </div>\n        </div>\n      `),
        this.testimonialCarouselInner.appendChild(s);
    }),
      this.testimonialCarouselInner.children[0].classList.add("active"),
      this.testimonialLoader.classList.add("d-none"),
      this.testimonialCarousel.classList.remove("d-none");
  }
  showPopularVideos(e) {
    e.forEach((e) => {
      this.popularCarouselInner.appendChild(this.createCarouselVideoCard(e));
    }),
      $("#popular-carousel").carousel({ interval: 1e4 }),
      $("#popular-carousel .carousel-item").each(function () {
        var e = $(this).next();
        e.length || (e = $(this).siblings(":first")),
          e.children(":first-child").clone().appendTo($(this));
        for (var s = 0; s < 3; s++)
          (e = e.next()).length || (e = $(this).siblings(":first")),
            e.children(":first-child").clone().appendTo($(this));
      }),
      this.popularCarouselInner.children[0].classList.add("active"),
      this.popularLoader.classList.add("d-none"),
      this.popularCarousel.classList.remove("d-none");
  }
  showLatestVideos(e) {
    e.forEach((e) => {
      this.latestCarouselInner.appendChild(this.createCarouselVideoCard(e));
    }),
      $("#latest-carousel").carousel({ interval: 1e4 }),
      $("#latest-carousel .carousel-item").each(function () {
        var e = $(this).next();
        e.length || (e = $(this).siblings(":first")),
          e.children(":first-child").clone().appendTo($(this));
        for (var s = 0; s < 3; s++)
          (e = e.next()).length || (e = $(this).siblings(":first")),
            e.children(":first-child").clone().appendTo($(this));
      }),
      this.latestCarouselInner.children[0].classList.add("active"),
      this.latestLoader.classList.add("d-none"),
      this.latestCarousel.classList.remove("d-none");
  }
  createCarouselVideoCard(e) {
    const s = document.createElement("div");
    return (
      s.classList.add("carousel-item"),
      (s.innerHTML = `\n      <div class="col-md-6 col-lg-3">\n        <div class="card card-body">\n          <div class="video">\n            <img class="img-fluid" src="${
        e.thumb_url
      }" alt="">\n            <img src="images/play.png" alt="" class="play-btn">\n          </div>\n          <h5 class="card-title font-weight-bold mt-3">${
        e.title
      }</h5>\n          <p class="card-text">${
        e["sub-title"]
      }</p>\n          <div class="tutorial-author d-flex align-items-center">\n            <img src="${
        e.author_pic_url
      }" alt="" class="rounded-circle">\n            <span class="ml-2 font-weight-bold">${
        e.author
      }</span>\n          </div>\n          <div class="mt-3 tutorial-info d-flex justify-content-between align-items-center">\n            <span class="rating">\n              <img src="images/star_${
        e.star >= 1 ? "on" : "off"
      }.png" alt="">\n              <img src="images/star_${
        e.star >= 2 ? "on" : "off"
      }.png" alt="">\n              <img src="images/star_${
        e.star >= 3 ? "on" : "off"
      }.png" alt="">\n              <img src="images/star_${
        e.star >= 4 ? "on" : "off"
      }.png" alt="">\n              <img src="images/star_${
        e.star >= 5 ? "on" : "off"
      }.png" alt="">\n            </span>\n            <span class="length font-weight-bold video-duration">${
        e.duration
      }</span>\n          </div>\n        </div>\n      </div>\n    `),
      s
    );
  }
  showCourses(e) {
    (this.numberCourses.textContent = e.length + " results"),
      e.forEach((e) => {
        const s = document.createElement("div");
        (s.className = "col-md-6 col-lg-4 col-xl-3 my-4"),
          (s.innerHTML = `\n        <div class="card card-body">\n          <div class="video">\n            <img class="img-fluid" src="${
            e.thumb_url
          }" alt="">\n            <img src="images/play.png" alt="" class="play-btn">\n          </div>\n          <h5 class="card-title font-weight-bold mt-3">${
            e.title
          }</h5>\n          <p class="card-text">${
            e["sub-title"]
          }</p>\n          <div class="tutorial-author d-flex align-items-center">\n            <img src="${
            e.author_pic_url
          }" alt="" class="rounded-circle">\n            <span class="ml-2 font-weight-bold">${
            e.author
          }</span>\n          </div>\n          <div class="mt-3 tutorial-info d-flex justify-content-between align-items-center">\n            <span class="rating">\n              <img src="images/star_${
            e.star >= 1 ? "on" : "off"
          }.png" alt="">\n              <img src="images/star_${
            e.star >= 2 ? "on" : "off"
          }.png" alt="">\n              <img src="images/star_${
            e.star >= 3 ? "on" : "off"
          }.png" alt="">\n              <img src="images/star_${
            e.star >= 4 ? "on" : "off"
          }.png" alt="">\n              <img src="images/star_${
            e.star >= 5 ? "on" : "off"
          }.png" alt="">\n            </span>\n            <span class="length font-weight-bold">${
            e.duration
          }</span>\n          </div>\n        </div>\n      `),
          this.courseListing.appendChild(s);
      }),
      this.coursesLoader.classList.add("d-none"),
      this.numberCourses.classList.remove("d-none"),
      this.courseListing.classList.remove("d-none");
  }
  updateCourses(e) {
    this.clearCourses(), this.showCourses(e);
  }
  clearCourses() {
    for (
      this.numberCourses.classList.add("d-none"),
        this.courseListing.classList.add("d-none"),
        this.coursesLoader.classList.remove("d-none");
      this.courseListing.firstElementChild;

    )
      this.courseListing.firstElementChild.remove();
  }
}
class SmileSchool {
  async getTestimonials() {
    let e = await window.fetch("https://smileschool-api.hbtn.info/quotes");
    return (e = await e.json()), e;
  }
  async getPopularVideos() {
    let e = await window.fetch(
      "https://smileschool-api.hbtn.info/popular-tutorials"
    );
    return (e = await e.json()), e;
  }
  async getLatestVideos() {
    let e = await window.fetch(
      "https://smileschool-api.hbtn.info/latest-videos"
    );
    return (e = await e.json()), e;
  }
  async getCourses() {
    let e = await window.fetch("https://smileschool-api.hbtn.info/courses");
    return (e = await e.json()), e;
  }
  async getFilteredCourses(e, s, t) {
    let i = await window.fetch(
      `https://smileschool-api.hbtn.info/courses?q=${e}&topic=${s}&sort=${t}`
    );
    return (i = await i.json()), i;
  }
}
const App = (function () {
  let e, s;
  function t() {
    const t = e.keywordsField.value,
      i = e.topicField.value,
      n = e.sortField.value;
    s.getFilteredCourses(t, i, n).then((s) => {
      e.updateCourses(s.courses);
    });
  }
  return {
    init: function () {
      const i = document.querySelector("body").id;
      (e = new UI()),
        (s = new SmileSchool()),
        (function (i) {
          ("homepage" !== i && "pricing" !== i) ||
            s.getTestimonials().then((s) => {
              e.showTestimonials(s);
            });
          "homepage" === i &&
            (s.getPopularVideos().then((s) => {
              e.showPopularVideos(s);
            }),
            s.getLatestVideos().then((s) => {
              e.showLatestVideos(s);
            }));
          "courses" === i &&
            (s.getCourses().then((s) => {
              e.showCourses(s.courses);
            }),
            e.keywordsField.addEventListener("input", t),
            e.topicField.addEventListener("input", t),
            e.sortField.addEventListener("input", t));
        })(i);
    },
  };
})();
document.addEventListener("DOMContentLoaded", App.init);
