import { Component } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';
import { Categorie } from '../../model/categorie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class AjoutcategorieComponent {
  ajoutcategorie=()=>{
    this.categorieservice.AddCategorie(this.categorieservice).subscribe(()=>{
      return this.router.navigate(['./listcategories']);
    })
  }
  categorieservice: any;
  router: any;
  cat: any;
  onFileChanged(event:any) {
    console.log( event.target.files[0].name) ;
    this.cat.imagecategorie="categories/"+event.target.files[0].name
    }

}
