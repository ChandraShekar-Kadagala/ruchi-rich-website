import { CartItem } from '../types/cart';
import { contactConfig } from '../config/contact';

export const generateWhatsAppMessage = (cartItems: CartItem[]): string => {
  let message = `Hello RUCHI RICH Team,\n\nI would like to enquire about the following products:\n\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name}\n`;
    message += `   Package: ${item.selectedOption.label}\n`;
    message += `   Quantity: ${item.quantity}\n\n`;
  });

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  message += `Total selected items: ${totalItems}\n\n`;
  message += `Please confirm availability and share the applicable quotation and ordering details.\n\nThank you.`;

  return message;
};

export const getWhatsAppLink = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
};
