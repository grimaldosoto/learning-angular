import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from "../../interfaces/product.interface";
import {CartService} from "../../pages/services/cart.service";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({required: true}) product!: Product;

//  protected readonly onclick = onclick;
  cartService = inject(CartService)
  addProduct(product: Product){
    this.cartService.addProduct(product);
  }
}
