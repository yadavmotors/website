import { drizzle } from "drizzle-orm/mysql2";
import { reviews } from "./drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

const realReviews = [
  {
    name: "Mannem Viswanath Reddy",
    suburb: "Werribee",
    rating: 5,
    text: "Excellent service at Yadav Motors Automotive! I recently went for a car service and engine oil change, and I am very satisfied with their work. The staff were friendly, honest, and explained everything clearly. The service was done on time and the price was reasonable as well. My car is running much smoother after the service. I highly recommend this place to anyone looking for a reliable and trustworthy mechanic.",
  },
  {
    name: "Mudunuri Vinod Kumar",
    suburb: "Werribee",
    rating: 5,
    text: "I recently serviced my car here and had a great experience. The staff were professional and explained everything clearly. The service was completed on time and my car is running smoothly now. Pricing was reasonable. Highly recommended.",
  },
  {
    name: "Bala Sundaram",
    suburb: "Werribee",
    rating: 5,
    text: "I highly recommend Ram (Yadav Motors) this garage for their honesty and professionalism. Ram take the time to explain each necessary repair to me and did an exceptional job. I will come back without any question if the need ever arises with my car. Thank you for your hard work and generosity.",
  },
  {
    name: "Noel George",
    suburb: "Werribee",
    rating: 5,
    text: "Amazing service by Rama and his team at Yadav Motors t/a Russell Street Automotive Werribee. For my electric car Tesla Model Y I needed new tyres and wheel alignment. Amazing service by Rama, he ordered the specific EV tyres in for me, fitted and wheel alignment completed. Not many mechanics do EV related car tyres fitting and wheel alignment in werribee area. These guys had all the necessary equipments for EV car jobs, Rama did the work on my car properly using EV specific jack pads for safely hoist lifting the car. Loved the service, will 100% be coming here again and recommend to all, especially EV car users. Thank you once again!",
  },
  {
    name: "sabarinath vandanapu",
    suburb: "Werribee",
    rating: 5,
    text: "Good experience with the staff. They explained the problem clearly in detail and provided different solutions for the issue within budget.",
  },
  {
    name: "santhosh vihi",
    suburb: "Werribee",
    rating: 5,
    text: "Genuine and reliable service. Highly recommended",
  },
  {
    name: "Surya Chandra",
    suburb: "Werribee",
    rating: 5,
    text: "Got my Honda HRV servicing and wheel balancing done here. Friendly and welcoming team, Ram and Raj explained what needs to be done clearly.",
  },
  {
    name: "Krishna B",
    suburb: "Werribee",
    rating: 5,
    text: "Wonderful place to fix your vehicle in top shape. Friendly staff, Rama is there to answer any questions big or small about your vehicle to drive smoothly and safely.",
  },
  {
    name: "Kee Xiowen",
    suburb: "Werribee",
    rating: 5,
    text: "Very efficient and reliable and reasonable",
  },
  {
    name: "Krish",
    suburb: "Werribee",
    rating: 5,
    text: "Excellent service. Very professional and very informative.. highly recommend",
  },
  {
    name: "manik prabhu",
    suburb: "Werribee",
    rating: 5,
    text: "I'm really impressed with the service I received. Rama diagnosed the issue quickly, kept me updated throughout the process, and completed the repair sooner than expected. The workmanship is top-notch, and I appreciate the transparency with costs. It's rare to find such trustworthy and professional service these days.",
  },
  {
    name: "Kulwant Singh",
    suburb: "Werribee",
    rating: 5,
    text: "Great service at a great price! Yadav Motors really knows their stuff. Super friendly, honest, and the work is always top-notch without burning a hole in your pocket. Highly recommend!",
  },
  {
    name: "praveen bitla",
    suburb: "Werribee",
    rating: 5,
    text: "Ram is very experienced skilled mechanic, reliable and trustworthy in his work. Honest, fair pricing and friendly service. I've been using his services since 10+ yrs. Highly recommended.",
  },
];

async function seed() {
  try {
    console.log("🌱 Seeding reviews...");
    await db.insert(reviews).values(realReviews);
    console.log("✅ Successfully seeded", realReviews.length, "reviews");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding reviews:", error);
    process.exit(1);
  }
}

seed();
