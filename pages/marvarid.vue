<template>
    <div>
        <div class="container">
            <div class="header">
                <h1>Марварид</h1>
                <p>
                Тараз қаласындағы «Марварид» мейрамханасы – қала тұрғындары мен қонақтары
                арасында танымал орын. Мейрамхана Алихан Қомратов көшесі, 94 мекенжайында
                орналасқан. Жұмыс уақыты: Күн сайын сағат 08:00-ден 00:00-ге дейін.
                </p>
                <p class="p-text">Орташа есеп 4500 теңгені құрайды.</p>
                <div class="contact-contain">
                    <button class="btn-primary">Брон жасау</button>
                    <div>
                        <p class="contact-info">
                        <h4 class="text-info">Байланыс телефондары: </h4>
                        <a href="tel:+77784077777">+7 (778) 407-77-77</a>
                    </p></div>
                </div>
            </div>
            <div class="img-marvarid">
                <img src="/img/restaurant.jpg" alt="Марварид мейрамханасы" />
            </div>
        </div>
  
        <div class="services">
        <h2>Біз ұсынатын сервистер</h2>
        <div class="services-list">
          <div class="service-item">
            <img src="/img/breakfast.png" alt="Таңғы ас" />
            <h3>Таңғы ас</h3>
            <p>Балғын әрі нәрлі ас мәзірі күнді қуатпен бастауға көмектеседі.</p>
          </div>
          <div class="service-item">
            <img src="/img/takeout.png" alt="Тамақты өзімен алып кету" />
            <h3>Тамақты өзімен алып кету</h3>
            <p>Дәмді тағамдарды жолға немесе үйге ыңғайлы түрде алыңыз.</p>
          </div>
          <div class="service-item">
            <img src="/img/vip.png" alt="VIP-залдар" />
            <h3>VIP-залдар</h3>
            <p>Жайлы және ерекше ортада демалып, кешкі ас ішіңіз.</p>
          </div>
          <div class="service-item">
            <img src="/img/wifi.png" alt="Тегін Wi-Fi" />
            <h3>Тегін Wi-Fi</h3>
            <p>Жоғары жылдамдықты интернетпен әрқашан байланыста болыңыз.</p>
          </div>
        </div>
      </div>


      <div class="faq">
    <h2 class="faq-title">Жиі қойылатын сұрақтар</h2>
    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="faq-item"
    >
      <button
        class="faq-question"
        @click="toggleAnswer(index)"
      >
        {{ item.question }}
        <span
          class="icon"
          :class="{ open: openIndex === index }"
        >
          ⌄
        </span>
      </button>
      <div
        v-if="openIndex === index"
        class="faq-answer"
      >
        {{ item.answer }}
      </div>
    </div>
  </div>
      
  <div class="gallery">
    <div
      v-for="(image, index) in images"
      :key="index"
      class="gallery-item"
    >
      <img
        :src="image"
        alt="Gallery Image"
        class="gallery-image"
        @mouseover="hoverIndex = index"
        @mouseleave="hoverIndex = null"
        :class="{ 'zoomed': hoverIndex === index }"
      />
    </div>
  </div>
    </div>
  </template>

  <script>
import { ref } from 'vue';

export default {
  setup() {
    const openIndex = ref(null); // Tracks the currently opened question
    const faqs = ref([
      {
        question: "Мейрамхана қай уақытта жұмыс істейді?",
        answer: "Біз күн сайын 08:00-ден 23:00-ге дейін ашықпыз.",
      },
      {
        question: "Таңғы ас мәзірі нешеге дейін қолжетімді?",
        answer: "Таңғы ас мәзірі 11:00-ге дейін қолжетімді.",
      },
      {
        question: "Арнайы шараларға тапсырыс бере аламын ба?",
        answer: "Иә, арнайы шараларға тапсырысты алдын ала беруіңізге болады.",
      },
    ]);

    const toggleAnswer = (index) => {
      openIndex.value = openIndex.value === index ? null : index;
    };

    return {
      openIndex,
      faqs,
      toggleAnswer,
    };
  },
  
};
</script>
  
  <style scoped>
  body {
    font-family: 'MyFont';
    max-width: 1200px;
    margin: 0 auto;
  }
  .container{
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
  .header {
    text-align: center;
    margin: 2rem auto;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #2a2a2a;
    text-align: start ;
    margin-bottom: 1rem;
  }
  
  .header p {
    font-size: 1.2rem;
    color: #555;
    text-align: start ;
  }
  .p-text{
    margin-top:1.5rem;
  }
  .img-marvarid img {
    height: 475px;
    max-width: 506px;
    border-radius:50px;
  }
  
  .btn-primary {
    display: inline-block;
    background-color: #45752C;
    color: #fff;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-align: center;
    margin-top: 1rem;
  }
  
  .btn-primary:hover {
    background-color: #45a049;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  
  .contact-info a {
    color: #000000;
    text-decoration: none;
    font-size: 20px;
  }
  .text-info {
    color: #487332;
    text-decoration: none;
    font-size: 20px;
  }
  
  .contact-info a:hover {
    text-decoration: underline;
  }
  .contact-contain{
    margin-top: 7%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 60px;
  }
  
  .services {
    margin-top: 5rem;
    padding: 2rem;
    border-top: 3px solid #45752C;
    max-width: 1200px;
    margin: 3rem auto;
  }
  
  .services h2 {
    margin-top: 5rem;
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
    .services-list {
    display: flex;
    justify-content: space-between; 
    align-items: flex-start; 
    gap: 2rem; 
    margin: 0 auto;
    max-width: 1200px; 
    }

    .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    text-align: center;
    padding: 1rem;
    }

    .service-item img {
    width: 80px; 
    height: 80px;
    margin-bottom: 1rem;
    object-fit: contain;
    }


  .service-item h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .service-item p {
    font-size: 1rem;
    color: #555;
  }
  
  @media (max-width: 768px) {
    .services-list .container {
      flex-direction: column;
      align-items: center; 
    }
  
    .service-item {
      margin: 1rem 0;
    }
  }
  .faq {
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.faq-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.faq-item {
  margin-bottom: 1rem;
  border-radius: 15px;
  background-color: #E3EADF;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  font-size: 1rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-question:focus {
  outline: none;
}

.faq-answer {
  padding: 10px 500px 80px 25px ;
  background-color: #E3EADF;
  font-size: 0.95rem;
  border-radius: 10px;
}

.icon {
  transition: transform 0.3s ease;
}

.icon.open {
  transform: rotate(180deg);
}
  </style>
  