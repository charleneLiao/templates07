
window.loadFooter = function () {
  const target = document.getElementById("footerComponent");
  if (!target) return;

  const data = {
    logo: "images/ft_logo.svg",
    hotelName: "高雄特斯德酒店",
    address: "高雄市新光路38號24F-6",
    phone: "+886-7-968-2715",
    fax: "+886-7-952-2221",
    social: [
      { href: "https://www.facebook.com/85SkyTowerHotel", icon: "fa-facebook", name: "Facebook" },
      { href: "http://www.weibo.com/1854503391/profile?topnav=1&amp;wvr=3.6", icon: "fa-youtube", name: "YouTube" },
      { href: "https://plus.google.com/u/0/b/110324599943771007016", icon: "fa-google", name: "Google+" }
    ],
    chains: [
      {
        group: "特斯德酒店",
        links: ["新竹特斯德酒店", "知本特斯德酒店", "礁溪特斯德酒店", "台北特斯德酒店", "北投特斯德酒店"]
      },
      {
        group: "特斯德酒店",
        links: ["宜蘭傳藝特斯德酒店", "特斯德大飯店"]
      },
      {
        group: "特斯德會館",
        links: ["特斯德會館台北南西", "特斯德會館台北林森"]
      },
      {
        group: "海外酒店",
        links: ["模里西斯帝王酒店", "尼加拉瓜馬拿瓜皇冠廣場飯店", "帛琉特斯德酒店", "西貢特斯德酒店"]
      }
    ],
    bottomLinks: [
      { text: "關於特斯德酒店", href: "#" },
      { text: "隱私權政策", href: "#" },
      { text: "連絡我們", href: "#" }
    ],
    note: "網頁中使用之飯店照片皆由四方通行拍攝，如有任何的拍攝服務需求，請與我們聯絡",
    button: "攝影諮詢"
  };

  let html = `
   <footer class="footerComponent">
  <div class="container">

    <div class="row align-items-center mb-4">
      <div class="col-md-3 text-md-start text-center mb-3 mb-md-0">
        <img src="${data.logo}" alt="logo" class="img-fluid">
      </div>

      <div class="col-md-3 text-md-start text-center">
        <ul class="list-unstyled mb-2 small">
          <li class="fw-bold fs-6">${data.hotelName}</li>
          <li>${data.address}</li>
          <li>訂房專線：${data.phone}</li>
          <li>傳真號碼：${data.fax}</li>
        </ul>
      </div>
      <div class="col-md-3">
        <div class="socialBox">
          ${data.social.map(item => `
          <a target="_blank" href="${item.href}" class="text-dark fs-5" aria-label="${item.name}">
            <i class="fa-brands ${item.icon}"></i>
          </a>
          `).join('')}
        </div>
      </div>
      <div class="col-md-3">
        <button class="btn btn-ft">${data.button}</button>
      </div>
    </div>
    <div class="footer-hotel-group d-flex flex-wrap">
  ${data.chains.map((group, index, array) => `
    <div class="group-column${index === 0 ? ' first' : ''}${index === array.length - 1 ? ' last' : ''}">
      <div class="group-title">${group.group}</div>
      <ul class="group-list">
        ${group.links.map(name => `<li><a href="#">${name}</a></li>`).join("")}
      </ul>
    </div>
  `).join("")}
</div>
  <div class="row-policy">
    <p class="mb-1">
  ${data.bottomLinks.map(link => `<span><a href="${link.href}">${link.text}</a></span>`).join(" | ")}
  <span> Copyright Easytravel</span>
</p>
    <p class="mb-2">${data.note}</p>
  </div>

  </div>
  <!-- row end -->
  </div>
</footer>
  `;

  target.innerHTML = html;
};
