import dotenv from 'dotenv';
import reviewModel from '../api/reviews/reviewModel.js';
import reviews from './reviews.js';

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

if (process.env.SEED_DB == 'true') {  
  loadReviews();
}