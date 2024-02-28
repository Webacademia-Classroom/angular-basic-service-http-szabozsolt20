import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit {
  productService = inject(ProductService);

  list: Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      list => this.list = list
    );
  }
}
