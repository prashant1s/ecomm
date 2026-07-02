import { Product } from "../types/product";

const WHATSAPP_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919971509003";

export function getWhatsAppProductLink(product: Product) {
  const price = `₹${product.price.toFixed(2)}`;
  const rating = "★".repeat(Math.round(product.rating ?? 5));

  const message = `
🛒 *NEW ORDER REQUEST*

Hello *Jiya JR*,
I would like to order the following product.
──────────────────
*📦 PRODUCT DETAILS*

• Name: ${product.name}
• Category: ${product.category}
• Price: ${price}
• Rating: ${rating}

📷 *Product Image*
${product.imageUrl}
`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
    message.trim()
  )}`;
}