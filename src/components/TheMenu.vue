<template>
    <div class="menu-page">
      <h1>התפריט שלנו</h1>
      <div class="menu-items">
        <div class="menu-item" v-for="item in menuItems" :key="item.id">
          <img :src="item.image" :alt="item.name" />
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p class="price">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          {
            id: 1,
            name: "מנה אחת",
            description: "מנה טעימה ומרגשת",
            price: "₪25",
            image: "../../images/meal1.jpg"
          },
          {
            id: 2,
            name: "מנה שנייה",
            description: "מנה עשירה ומשביעה רעבים",
            price: "₪35",
            image: "../../images/meal2.jpg"
          },
          {
            id: 1,
            name: "מנה אחת",
            description: "מנה טעימה ומרגשת",
            price: "₪25",
            image: "../../images/meal1.jpg"
          },
          {
            id: 1,
            name: "מנה אחת",
            description: "מנה טעימה ומרגשת",
            price: "₪25",
            image: "../../images/meal1.jpg"
          },
          {
            id: 1,
            name: "מנה אחת",
            description: "מנה טעימה ומרגשת",
            price: "₪25",
            image: "../../images/meal1.jpg"
          },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .menu-page {
    text-align: center;
  }
  
  .menu-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  
  .menu-item {
    width: 300px;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .menu-item img {
    width: 100%;
    border-radius: 8px;
  }
  
  .item-details {
    margin-top: 1rem;
  }
  
  .item-details h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .item-details p {
    margin-top: 0.5rem;
    color: #777;
  }
  
  .price {
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
  }
  </style>
  