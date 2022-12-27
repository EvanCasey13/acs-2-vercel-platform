import dotenv from 'dotenv';
import reviewModel from '../api/reviews/reviewModel.js';
import reviews from './reviews.js';
import movieModel from '../api/movies/movieModel.js';
import movies from './movies.js';

dotenv.config();

// deletes all review documents in collection and inserts test data
export async function loadReviews() {
  console.log('load seed data');
  console.log(reviews.length);
  try {
    await reviewModel.deleteMany();
    await reviewModel.collection.insertMany(reviews);
    console.info(`${reviews.length} Reviews were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load review Data: ${err}`);
  }
}

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

if (process.env.SEED_DB == 'true') {  
  loadReviews();
  loadMovies();
}