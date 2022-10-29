import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<img class="restaurant__poster"
       src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="menampilkan foto dari restaurant ${restaurant.name}">
<div class="restaurant__info">
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <h4>address : <span>${restaurant.address}</span></h4>
  <h4>City : <span>${restaurant.city}</span></h4>
</div>

<h4 class="titlemenu">Menu</h4>

<div class="menu">
  <div class="food">
  <h4>Food</h4>
    <ul>${restaurant.menus.foods
    .map(
      (food) => `
      <li>${food.name}</li>
      `,
    )
    .join('<br>')}</ul>
    </div>

  <div class="drink">
  <h4>Drink</h4>
  <ul>${restaurant.menus.drinks
    .map(
      (drink) => `
    <li>${drink.name}</li>
    `,
    )
    .join('<br>')}</ul>
  </div>
  </div>


  <div class="restaurant__overview">
  <div class="description">
    <h4>Description</h4>
  <p>${restaurant.description}</p>
  </div>

  <div class="review">
  <h4>Reviews</h4>
  <p>${restaurant.customerReviews
    .map(
      (review) => `
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
    `,
    )
    .join('<br>')}
  </div>
</div>`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="post-item" tabindex="0">
  <img class="post-item__thumbnail lazyload"
  data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="menampilkan foto dari restaurant ${restaurant.name}">
  <div class="post-item__content">
    <h2 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <p class="post-item__info">City : ${restaurant.city}</p>
    <p class="post-item__info">Rate : ${restaurant.rating}</p>
    <p class="post-item__description">${restaurant.description}</p>
  </div>
</article>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
