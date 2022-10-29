import RestaurantDbSource from '../../data/restoran-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <picture>
    <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
    <img class="image" src='./images/hero-image_2-large.jpg' 
    alt="hero image">
    </picture>

  <div class="hero" >
    <div class="hero__inner" tabindex="0">
      <h2 class="hero__title">offering the best tasting experiece</h2>
      <p class="hero__tagline">fresh ingredient, tasty heals and creative chef</p>
    </div>
  </div>

    <section  class="content">
    <div class="latest">
      <h2 class="latest__label" tabindex="0">Explore Restaurant</h2>
      <div class="posts" id="listrestoran">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantDbSource.HomeListRestaurant();
    const listRestoran = document.querySelector('#listrestoran');
    restaurants.forEach((restaurant) => {
      listRestoran.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
