import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../../model/categorie';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  listcategories:Categorie[] | undefined;
constructor(private catService:CategorieService, private router:Router) { }
ngOnInit(): void {
  this.catService.getcategories().subscribe((data:Categorie[]) =>
this.listcategories = data)
}

}
