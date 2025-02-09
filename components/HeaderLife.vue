<template>
    <div class="navbar">
      <div class="item">
        <span class="emoji">🏕️</span>
        <div>
          <p class="title">Турист</p>
          <p class="subtitle">Сенің Дәрежең</p>
        </div>
      </div>
      <div class="item">
        <span class="emoji">❤️</span>
        <div>
          <p class="title">5</p>
          <p class="subtitle">Өмір саны</p>
        </div>
      </div>
      <div class="item">
        <span class="emoji">💰</span>
        <div>
          <p class="title">0</p>
          <p class="subtitle">Жиналған Қор</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 80px;
    padding: 10px 20px;
    border-radius: 8px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .emoji {
    font-size: 35px;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666;
    margin: 0;
  }
  </style>
  