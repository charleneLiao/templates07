window.loadDiningFacilities = function () {
  const target = document.getElementById("diningFacilitiesComponent");
  if (!target) return;

  // 外框 HTML
  target.innerHTML = `
    <section class="diningFacilitiesComponent">
      
      <div class="container my-5">
      <h2 class="hd-title">嚴選食材，精緻饗食</h2>
        <div class="row" id="diningFacilitiesRow"></div>
      </div>
    </section>
  `;

  const row = document.getElementById("diningFacilitiesRow");

  // 美食資料
  const foodData = [
    {
      img: "sfd-01.jpg",
      title: "香煎肋眼牛排",
      desc: "厚切肋眼煎至五分熟，搭配濃郁胡椒醬與爐烤時蔬，外酥內嫩。"
    },
    {
      img: "sfd-02.jpg",
      title: "香檳佐黃玫瑰",
      desc: "精緻雙人香檳組合，綠意環繞、黃玫瑰點綴，浪漫氛圍升級。"
    },
    {
      img: "sfd-03.jpg",
      title: "繽紛水果拼盤",
      desc: "多種當季鮮果搭配優格與堅果，酸甜清爽兼具營養與美感。"
    },
    {
      img: "sfd-04.jpg",
      title: "經典提拉米蘇",
      desc: "層層堆疊濃郁咖啡與可可風味，義式甜點首選。"
    },
    {
      img: "sfd-05.jpg",
      title: "冰鎮金黃啤酒",
      desc: "沁涼暢快的生啤酒，搭配微苦餘韻，是炎夏最佳拍檔。"
    },
    {
      img: "sfd-06.jpg",
      title: "豪華日式刺身",
      desc: "新鮮直送生魚片與壽司盛合，呈現道地日式職人美味。"
    },
    {
      img: "sfd-07.jpg",
      title: "百香果氣泡飲",
      desc: "熱帶風味融合薄荷與檸檬氣泡，清新解膩，視覺滿分。"
    },
    {
      img: "sfd-08.jpg",
      title: "草莓奶酪甜品",
      desc: "滑順奶酪淋上草莓醬汁與新鮮果粒，是少女心甜點代表作。"
    }
  ];

  // 動態插入每一張圖（指定第 0, 3, 5 張預設為滑入狀態）
  foodData.forEach((item, i) => {
    const isActive = [0, 2, 5, 7].includes(i) ? 'active' : '';
    const delay = i * 100;
    row.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="food-card position-relative overflow-hidden ${isActive}" data-aos="fade-up" data-aos-delay="${delay}" data-aos-duration="3000">
          <img src="images/food-s-pic/${item.img}" alt="${item.title}" class="img-fluid w-100">
          <div class="food-overlay d-flex flex-column justify-content-center align-items-center text-white text-center px-2">
            <h5 class="mb-2">${item.title}</h5>
            <p class="small">${item.desc}</p>
          </div>
        </div>
      </div>
    `;
  });
};
