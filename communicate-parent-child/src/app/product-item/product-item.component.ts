import { Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "app-product-item",
    template: `
        <div class="product-item">
            <h3>{{ product.name }}</h3>
            <p>Price: {{ product.price}}</p>
            <button (click)="addToCart()">Add to Cart</button>
        </div>
    `,
    standalone: true,
})

export class ProductItemComponent {
    @Input() product: { name: string, price: number } = { name: '', price: 0 };
    @Output() added = new EventEmitter<{ name: string, price: number }>();

    addToCart() {
        this.added.emit(this.product);
    }
}