"use client";

import { CartProvider } from "@/app/cart/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
