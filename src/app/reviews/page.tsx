import { db } from "@/db";
import { reviewsTable } from "@/db/schema";
import { createReview } from "../actions/create-review";

export default async function AddReview() {
  const reviews = await db.select().from(reviewsTable);
  return (
    <div>
       <h2 className="py-3 text-2xl font-bold text-violet-700">Reviews</h2>
      <h3>Add Review</h3>
      <form action={createReview}>
        <label htmlFor="title" className="shadow border-2 p-2 bg-violet-300">Review title</label>
        <input type="text" name="title" id="title" placeholder="" className="border-2 schadow" />
        <label htmlFor="content" className="shadow border-2 p-2 bg-violet-300">Your review</label>
        <input type="text" name="content" id="content" placeholder="write your review here" className="border-2 schadow"/>
        <button type="submit" className="shadow border-2 p-2 bg-violet-300 rounded-2xl">Save</button>
      </form>

      <div className="px-20 py-3">
       
        <ul className="flex flex-wrap">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="border shadow rounded-2xl p-4 gap-4 py-3"
            >
              <h3 className="font-bold">{review.title}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
