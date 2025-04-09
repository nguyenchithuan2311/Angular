import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
    selector: "app-product-list",
    imports: [ProductItemComponent,CommonModule],
    template: `
       <h2>Danh sách sản phẩm</h2>
    <app-product-item
      *ngFor="let p of products"
      [product]="p"
      (added)="handleAddToCart($event)"
      >
    </app-product-item>

    <h3>🛒 Giỏ hàng:</h3>
    <ul>
      <li *ngFor="let item of cart">{{ item.name }} - {{ item.price }}₫</li>
    </ul>`,
    standalone: true,

})

export class ProductListComponent {
    products = [
        { name: "Sản phẩm 1", price: 100 },
        { name: "Sản phẩm 2", price: 200 },
        { name: "Sản phẩm 3", price: 300 },
    ];

    cart: { name: string, price: number }[] = [];

    handleAddToCart(product: { name: string, price: number }) {
        console.log("🛒 Đã nhấn nút Add to Cart2");
        this.cart.push(product);
    }
}