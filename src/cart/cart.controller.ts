import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  createCart() {
    return this.cartService.createCart();
  }

  @Post('add')
  addItemToCart(@Body() item) {
    return this.cartService.addToCart(item);
  }

  @Delete(':id')
  deleteItemFromCart(@Param('id') itemId: number) {
    return this.cartService.deleteFromCart(itemId);
  }

  @Put(':id')
  modifyItemQuantity(@Param('id') itemId: number, @Body('quantity') quantity: number) {
    return this.cartService.modifyQuantity(itemId, quantity);
  }
}
