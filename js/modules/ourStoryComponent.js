window.loadourStory = function () {
  const target = document.getElementById("ourStoryComponent");
  if (!target) return;

  target.innerHTML = `<section class="ourStoryComponent">
  <div class="container-fluid bg-fluidSecondary">
   <div class="row flex flex-wrap items-center justify-center">
    <div class="col w-full md:w-8/12 xl:w-6/12 t-left">
        <h3 class="t-h1"></h3>
        <h1>TESTO: 永續生活風格飯店</h1>
        <p class="t-h4 mt-xs"></p>
        <h2>高雄，一座灑滿光的城市，靜靜擁抱海與人。</h2>
        <p></p>
        <div class="c-richText mt-xs">
            <p><span style="font-weight: 400;">TESTO 不僅僅是一家酒店。 TESTO 代表多樣性、自然和溫暖。它體現了多面性，歡迎每一位渴望豐富多彩生活的人士。作為一家業主管理的概念酒店，我們傳遞著對酒店業和酒店業的真誠熱情——正因如此，我們隨時為您服務——無論您何時何地，無論您需要我們什麼。我們能夠無縫適應您的節奏，是您最美麗的休憩之所、最喜愛的聚會場所、最方便的平台。位於慕尼黑和薩爾斯堡市中心的生活風格飯店。放鬆身心，隨波逐流，重塑自我。今天，您想成為誰，毛毛蟲還是蝴蝶？</span><i>
            <span style="font-weight: 400;">今天的你，想在港邊緩緩爬行，還是展翅飛越壽山的蝴蝶？</span></i></p>
        </div>
        <div class="mt-s">我們的故事與使命</div>
    </div>
</div>
</div>
</section>
`;
};
