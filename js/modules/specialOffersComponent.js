window.loadSpecialOffers = function () {
  const target = document.getElementById("specialOffersComponent");
  if (!target) return;

  // 插入 HTML 結構（含頁碼區）
  target.innerHTML = `
<section class="specialOffersComponent">
  <div class="container-fluid">
    <div class="promo-sliderBox position-relative">
      <div class="promo-sliderIn">
        <div class="promo-slider"></div>
        <div class="slider-page-indicator text-center mt-3">
          <span id="slickPageNow">1</span> / <span id="slickPageTotal">2</span>
        </div>
      </div>
    </div>
  </div>
</section>
  `;

  const slider = document.querySelector(".promo-slider");
  // 插入內容卡片
  for (let i = 1; i <= 8; i++) {
    const num = String(i).padStart(2, '0');
    const promo = {
      img: `images/news/news${num}.jpg`,
      date: `2025/06/${String(8 + i).padStart(2, '0')}`,
      title: `活動標題 ${i}`,
      desc: `這是第 ${i} 筆新聞的簡要說明內容，可替換為實際資料。`
    };
    const delay = i * 500;

    if (i === 1) {
      slider.innerHTML += `
    <div class="card mx-2 no-image" data-aos="fade-up" data-aos-delay="${delay}" data-aos-duration="3000">
      <small class="text-uppercase fw-bold">飯店及度假村<hr></small>
      <h2 class="display-7 fw-light my-3">為您精心策劃的文化目的地</h2>
      <p>
        踏上為您量身訂製的獨特旅程，
        從我們歷史悠久、魅力非凡的酒店，
        到令人嘆為觀止的城市景觀和寧靜祥和的世外桃源。
        在萊佛士，每個目的地都經過精心挑選，
        旨在激發您的想像力，提升您的心靈。
      </p>
      <a href="news_detail.html" class="d-inline-flex align-items-center gap-1">
        去體驗<i class="fa-solid fa-arrow-right-long arrow-animate"></i>
      </a>
    </div>
  `;
    } else {
      slider.innerHTML += `
    <div class="card mx-2" data-aos="fade-up" data-aos-delay="${delay}" data-aos-duration="3000">
      <img src="${promo.img}" class="card-img-top" alt="${promo.title}">
      <div class="card-body">
        <p class="date">${promo.date}</p>
        <h5 class="card-title">${promo.title}</h5>
        <p class="card-text">${promo.desc}</p>
        <a href="news_detail.html" class="btn btn-primary btn-detail">詳細內容</a>
      </div>
    </div>
  `;
    }

  }

  const $slider = $('.promo-slider');

  // ✅ 頁數監控邏輯（在 slick() 前綁定）
  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    const totalPages = Math.ceil(slick.slideCount / slick.options.slidesToScroll);
    const currentPage = Math.floor((currentSlide || 0) / slick.options.slidesToScroll) + 1;
    document.getElementById('slickPageNow').textContent = currentPage;
    document.getElementById('slickPageTotal').textContent = totalPages;
  });

  // ✅ Slick 初始化
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: `<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fa-solid fa-angle-right"></i></button>`,
    dots: false,
    autoplay: false,
    infinite: true,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  });
};
