import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: body.items.map((item: any) => ({
      price_data: {
        currency: "jpy",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: "https://your-site.vercel.app/success",
    cancel_url: "https://your-site.vercel.app/cart",
  });

  return Response.json({ url: session.url });
}
