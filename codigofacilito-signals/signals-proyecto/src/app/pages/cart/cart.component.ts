import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartService = inject(CartService);

//protected readonly CartService = CartService;

  removeProduct(index:number){
    this.cartService.removeProduct(index);
  }
}
