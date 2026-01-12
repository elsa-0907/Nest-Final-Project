import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api-service';
import { Carousal } from "../../component/carousal/carousal";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Carousal],
  templateUrl: './home.html'
})
export class Home  {

  products: any[] = [];

  constructor(private api: ApiService) {}

  // ngOnInit(): void {
  //   this.api.getProducts().subscribe((res: any) => {
  //     this.products = res.products;
  //   });
  // }
}
