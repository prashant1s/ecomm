import { Product } from '../types/product';

// Replace with your real business WhatsApp phone number (Include Country Code, NO symbols like + or -)
const WHATSAPP_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "8168291041";

export function getWhatsAppProductLink(product: Product): string {
  const lineBreak = "%0A";
  
  // Format price beautifully
  const formattedPrice = `$${product.price.toFixed(2)}`;
  
  // Construct a professional receipt message layout
  const message = 
    `👋 Hello StyleHub! I would like to order this item:${lineBreak}${lineBreak}` +
    `🛒 *PRODUCT DETAILS*${lineBreak}` +
    `--------------------------------${lineBreak}` +
    `📦 *Name:* ${product.name}${lineBreak}` +
    `🏷️ *Category:* ${product.category}${lineBreak}` +
    `💵 *Price:* ${formattedPrice}${lineBreak}` +
    `⭐️ *Rating:* ${'★'.repeat(product.rating)}${lineBreak}${lineBreak}` +
    `🔗 *Product Image:* ${product.imageUrl}${lineBreak}${lineBreak}`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${message}`;
}