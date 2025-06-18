window.loadPopularRooms = function () {
  const target = document.getElementById("popularRoomsComponent");
  if (!target) return;

  // 插入 Swiper 結構
  target.innerHTML = `
    <section class="popularRoomsComponent">
  <div class="container">
    <div class="hd-title">
      <h3>入住</h3>
      <p>靜謐入眠．城市心中的度假時光</p>
    </div>
    <!-- tab -->
    <div class="room-tabs nav nav-pills justify-content-center mb-4" role="tablist">
      <button class="nav-link active" data-category="all">全部房型</button>
      <button class="nav-link" data-category="room">客房</button>
      <button class="nav-link" data-category="suite">套房</button>
      <button class="nav-link" data-category="special">特色套房</button>
    </div>

    <!-- Swiper 結構 -->
    <div class="swiper swiper2" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000">
      <div class="swiper-wrapper"></div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-group">
        <div class="swiper-button-prev"><i class="fa fa-chevron-left"></i></div>
        <div class="swiper-button-next"><i class="fa fa-chevron-right"></i></div>
      </div>
    </div>
  </div>
</section>
  `;

  const wrapper = document.querySelector(".swiper2 .swiper-wrapper");

  const roomData = [
    {
      img: "images/rooms/room01.jpg",
      title: "豪華尊貴客房",
      desc: "這間大型客房配有沙發和客廳，方便您在此放鬆身心。房內的木質地板、自然風格地毯及泰式家具營造出度假村氛圍，賓客更可欣賞到河畔和市區的迷人景觀。",
      category: "room"
    },
    {
      img: "images/rooms/room02.jpg",
      title: "典雅雙人房",
      desc: "設有舒適大床與精緻衛浴設備，適合情侶與新婚夫妻入住。可遠眺城市夜景，盡享浪漫氛圍。",
      category: "room"
    },
    {
      img: "images/rooms/room03.jpg",
      title: "高級家庭套房",
      desc: "提供雙床與寬敞客廳空間，非常適合家庭入住，設有兒童友善設備與安全設計。",
      category: "suite"
    },
    {
      img: "images/rooms/room04.jpg",
      title: "行政套房",
      desc: "擁有獨立書房與專屬辦公區，為商務旅客提供高效又舒適的住宿體驗。",
      category: "suite"
    },
    {
      img: "images/rooms/room05.jpg",
      title: "河景豪華房",
      desc: "臨江窗景搭配自然採光，讓您沉浸在每日不同的晨光與夕照。",
      category: "special"
    },
    {
      img: "images/rooms/room06.jpg",
      title: "簡約現代客房",
      desc: "設計風格簡潔俐落，融合科技與舒適，適合短期商務或個人旅客。",
      category: "room"
    },
    {
      img: "images/rooms/room07.jpg",
      title: "溫馨小屋房型",
      desc: "猶如置身鄉村木屋，溫馨小巧適合一人獨旅或情侶私密假期。",
      category: "room"
    },
    {
      img: "images/rooms/room08.jpg",
      title: "尊榮總統套房",
      desc: "擁有專屬酒吧、私人陽台與按摩浴缸，尊貴奢華體驗，為您打造最頂級住宿享受。",
      category: "special"
    }
  ];
  // 初始化 Swiper
  const swiper = new Swiper('.swiper2', {
    slidesPerView: 2,
    spaceBetween: 50,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      0: { slidesPerView: 'auto' }, // ✅ 小螢幕讓卡片自己決定寬度
      768: { slidesPerView: 1 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 2 }
    }
  });


  function renderRoomCards(category = 'all') {
    wrapper.innerHTML = '';
    const filtered = category === 'all' ? roomData : roomData.filter(r => r.category === category);

    filtered.forEach(room => {
      wrapper.innerHTML += `
      <div class="swiper-slide">
        <div class="card">
          <div class="imgBox">
            <img src="${room.img}" class="card-img-top" alt="${room.title}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${room.title}</h5>
            <p class="card-text">${room.desc}</p>
            <div class="btnBox">
              <a href="#" class="btn btn-primary-border">詳細介紹</a>
              <a href="#" class="btn btn-booking">預定</a>
            </div>
          </div>
        </div>
      </div>
    `;
    });

    swiper.update(); // 告訴 Swiper 內容改了
  }

  document.querySelectorAll('.room-tabs .nav-link').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.room-tabs .nav-link').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const category = this.getAttribute('data-category');
      renderRoomCards(category);
    });
  });

  renderRoomCards('all');


};
