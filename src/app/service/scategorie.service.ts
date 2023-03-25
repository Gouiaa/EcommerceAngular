import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScategorieService {
  baseurl="http://localhost:3001/api/scategories";
  
  constructor() {}
}
