import { Injectable } from '@nestjs/common';

@Injectable()
export class CartService {
  private cart = [];

  // Create a cart
  createCart() {
    this.cart = [];
    return { message: 'Cart created successfully!' };
  }

  // Add item to cart
  addToCart(item) {
    this.cart.push(item);
    return this.cart;
  }

  // Delete item from cart
  deleteFromCart(itemId) {
    const index = this.cart.findIndex(item => item.id === itemId);
    if (index === -1) {
      throw new Error('Item not found in the cart');
    }
    this.cart.splice(index, 1);
    return this.cart;
  }

  // Modify quantity
  modifyQuantity(itemId, quantity) {
    const item = this.cart.find(item => item.id === itemId);
    if (!item) {
      throw new Error('Item not found in the cart');
    }
    item.quantity = quantity;
    return item;
  }
}
