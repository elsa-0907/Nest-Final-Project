import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  imports: [],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails {
   product: any;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    // Read the product from navigation state
    this.router.queryParams.subscribe(() => {
    if (history.state && history.state.product)
      this.product = history.state.product;
    console.log(this.product);
    
  });
  }
}