window.loadpageHeader = function () {
  const target = document.getElementById("pageHeader");
  if (!target) return;

  target.innerHTML = `
    <section>
    <div class="hd title text-center" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
    <p>KAOHSIUNG</p>
    <h1>STAY</h1>
    <img src="images/banner/banner1.jpg" alt="" height="23" />
    </div>
    <div class="text">
    我們的每間客房和套房均融合了優雅風格和迷人的現代風格，擁有自己獨特的特色。
      </div>
    </section>
  `;

  AOS.init()
};
