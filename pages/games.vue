<template>
    <div class="container mx-auto px-4">
      <HeaderLife />
  
      <main class="text-center mt-8 relative">
      <div class="relative">
      <div class="absolute bb left-7">
        <img src="/img/aladiin.png" width="250" alt="">
      </div>
      <div class="container z-70">
      <div class="hab">
        <h1 class="main-title">
        Сәлем, саяхатшы! 🌍 Сенің алдыңда 10 деңгейлік ойын тұр, әр деңгей – жаңа сынақ пен жетістік.
        </h1>
        <div class="button-group">
        <button class="btn-primaryfirst">Бастау</button>
        <button class="btn-secondarysecond">Әлі емес</button>
        </div>
      </div>
        </div>
      </div>
        <section class="path-section">
          <h2 class="section-title">🔹 Сенің жолың:</h2>
          <ul class="step-list">
            <li v-for="(step, index) in steps" :key="index" class="step-item">
              <span class="step-icon">{{ index + 1 }}</span>
              <p>{{ step }}</p>
            </li>
          </ul>
        </section>
        <section class="challenge-section">
          <h3 class="challenge-title">
            Өзіңді сынауға дайынсың ба? 🔥 Қане, ойынды бастайық! 🚀
          </h3>
          <div class="button-group">
            <button class="btn-primary">Бастау</button>
            <button class="btn-secondary">Әлі емес</button>
          </div>
        </section>
      </main>


      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        steps: [
          "Турист ⛺ – Таразға алғаш рет келген саяхатшы.",
          "Зерттеуші 🔍 – Қаланың тарихына қызығушылық таныта бастады.",
          "Шәкірт 📜 – Ежелгі Тараздың құпияларын үйреніп жатырсың.",
          "Сарбаз ⚔️ – Алғашқы сынақтардан өттің, енді сен жауынгерлік рухты сезінудесің.",
          "Жауынгер 🛡️ – Тарихи шайқастар мен даңқты оқиғалар туралы білесің.",
          "Батыр 💪 – Сен нағыз батырсың! Енді сені үлкен сынақтар күтіп тұр.",
          "Қолбасшы ⚔️ – Көшпенділер тактикасын меңгеріп, өз әскеріңді басқара аласың.",
          "Данышпан 📖 – Тараздың барлық тарихи құпияларын аштың.",
          "Шыңға жетуші ⛰️ – Соңғы қадам, сен Тараздың шынайы рухын сезіндің.",
          "Ұлы Тараз қорғаушысы 🏛️ – Ең биік деңгей! Сен енді тарихты білетін, оны сақтайтын тұлғасың!"
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  .hab {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 999;
    margin-left: 50px;
  }
  .main-title {
    z-index: 999;
    margin-top: 8rem;
    width: 80%;
    font-size: 35px;
    margin-bottom: 1rem;
    line-height: 1.3;
    color: white;
    background: #45752C;
    border-radius: 30px;
    padding: 45px 38px;
  }
  
  .character-image {
    width: 40%;
    height: auto;
    object-fit: contain;
  }
  .button-group {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 5rem;
  }
  .btn-primaryfirst{
    width: 375px;
    padding: 15px 80px;
    background-color: #45752C;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 999;
  }
  .btn-secondarysecond{
    z-index: 999;
    width: 375px;
    padding: 15px 80px;
    background-color: transparent;
    border: 2px solid #45752C;
    color: #45752C;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  .btn-secondarysecond:hover {
    background-color: #45752C;
    color: white;
  }
  .btn-primaryfirst:hover {
    background-color: #3e8e41;
  }
  .btn-primary {
    width: 180px;
    padding: 15px 45px;
    background-color: #45752C;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    z-index: 999;
  }
  
  .btn-primary:hover {
    background-color: #3e8e41;
  }
  .bb {
    transform: translateX(-60%);
  }
  
  /* Второстепенная кнопка */
  .btn-secondary {
    z-index: 999;
    width: 180px;
    padding: 15px 45px;
    background-color: transparent;
    border: 2px solid #45752C;
    color: #45752C;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .btn-secondary:hover {
    background-color: #45752C;
    color: white;
  }
  
  .path-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-top: 3px solid #45752C;
    max-width: 1000px;
    margin-top: 7rem;
    border-bottom: 3px solid #45752C;

  }
  
  .section-title {
    align-items: flex-start;
    margin-top: 5rem;
    font-size: 40px;
    margin-bottom: 1rem;
  }
  
  .step-list {
    list-style: none;
    padding: 0;
    margin-bottom: 7rem;
  }
  
  .step-item {
    justify-content: flex-start;
    display: flex;
    align-items:center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }
  
  .step-icon {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #45752C;
    color: white;
    font-weight: bold;
    border-radius: 50%;
    font-size: 1.5rem;
  }
  
  .challenge-section {
    margin: 5rem 10rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 60%;
  }
  
  .challenge-title {
    font-size: 52px;
    color: #21453C;
    margin-bottom: 1rem;
  }
  </style>
  