import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{

  categories$;
  product:any =[];
  id;

  constructor(
    private router: Router,
    private route :ActivatedRoute,
    private categoryService: CategoryService,
    private productService:ProductService) {

    this.categories$ = categoryService.getCategories();

    this.id = this.route.snapshot.paramMap.get('id'); 
    if (this.id) this.productService.getProduct(this.id).pipe(take(1)).subscribe(p => this.product = p);
    
  }

  save(product){
    if (this.id) this.productService.updateProduct(this.id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }
  deleteProduct(){
    if(!confirm('Are you sure you want to delete this product?')) return;

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/admin/products']);

  }

  ngOnInit(){

  }

}
