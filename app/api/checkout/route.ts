import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { items } = await req.json();

  const line_items = items.map((item: any) => ({
    price_data: {
      currency: "jpy",
      product_data: {
        name: item.name,
        images: [item.image_url],
      },
      unit_amount: item.price,
      tax_behavior: "inclusive",
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    shipping_address_collection: {
      allowed_countries: ["JP"],
    },
    phone_number_collection: {
      enabled: true,
    },
    custom_text: {
      submit: {
        message: "表示金額には消費税が含まれています。",
      },
    },
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
  });

  return NextResponse.json({ url: session.url });
}