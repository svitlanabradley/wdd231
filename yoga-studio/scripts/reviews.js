import { reviews } from '../data/reviews.mjs';

function getRandomReviews(reviewsArray, count = 4) {
  const shuffled = reviewsArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const selectedReviews = getRandomReviews(reviews);

const reviewsContainer = document.getElementById('reviews-container');

selectedReviews.forEach(review => {
  const reviewElement = document.createElement('div');
  reviewElement.className = 'review-card';
  reviewElement.innerHTML = `
    <img src="${review.profile_picture}" alt="${review.user_name}" class="profile-pic" loading="lazy">
    <h3>${review.user_name}</h3>
    <p>⭐️ ${review.rating}/5</p>
    <p>"${review.review_text}"</p>
    <small>${review.date}</small>
  `;
  reviewsContainer.appendChild(reviewElement);
});