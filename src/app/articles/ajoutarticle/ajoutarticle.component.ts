import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutarticle',
  templateUrl: './ajoutarticle.component.html',
  styleUrls: ['./ajoutarticle.component.css']
})
export class AjoutarticleComponent {
  article:Article=new Article()
  constructor(private artserv:ArticleService){}
  ngOnInt(){}

}
