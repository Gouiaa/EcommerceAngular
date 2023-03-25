import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../model/categorie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url="http://localhost:3001/api/categories"
  
  constructor(private http:HttpClient) {}
  getcategories=():Observable<Categorie[]>=>{
    return this.http.get<Categorie[]>(this.url);
} 
AddCategorie (cat: Categorie ):Observable<Categorie>
{
return this.http.post<Categorie>(this.url,cat)
}
}
