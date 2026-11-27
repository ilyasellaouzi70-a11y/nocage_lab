"use client";

import Link from "next/link";

type WhatsAppButtonProps = {
  product?: {
    name: string;
    size?: string;
    quantity?: number;
    price?: number;
  };
};

export const WhatsAppButton = ({ product }: WhatsAppButtonProps) => {
  const phoneNumber = "+212702769784";

  let orderText = "";

  if (product) {
    orderText = `Hello, nocage_lab, I would like to order this product: ${product.name}`;
  } else {
    orderText = "Hello, nocage_lab, I have a question about your products.";
  }

  const encodedMessage = encodeURIComponent(orderText);
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2.5 px-4 rounded-full transition-colors shadow-lg shadow-pink-500/20 block text-center text-xs uppercase tracking-wider"
    >
      {product ? "Order Now" : "Contact Us on WhatsApp"}
    </Link>
  );
};