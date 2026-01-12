import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../api-service';
import { Router } from "@angular/router";
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [SlicePipe],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  products: any[] = [];
  constructor(private api:ApiService,private cdr:ChangeDetectorRef,private router:Router) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe((data: any) => {
      this.products = data.slice(0, 21); // Limiting to first 20 products for performance
      console.log(this.products);
      
      this.cdr.detectChanges();
    });
  }

  viewProductDetails(product: any) {
   this.router.navigate(['/product',product.id],{state: {product}});
  }
}