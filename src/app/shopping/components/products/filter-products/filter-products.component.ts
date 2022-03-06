import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'shared/services/category.service';

@Component({
  selector: 'filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {

  categories$;
  @Input('category') category;

  constructor(private categoryService : CategoryService) {
    this.categories$ = this.categoryService.getCategories();
   }

  ngOnInit(): void {
  }

}
