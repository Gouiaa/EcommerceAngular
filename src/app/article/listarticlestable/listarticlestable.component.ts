import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
  constructor(private artserv:ArticleService) { }
  article:Article[] ;
  ngOnInit(): void {
  this.loadArticles();
  }
  loadArticles () {
  return this.artserv.ListArticles().subscribe((data: Article[] ) =>this.article = data),
  (err:any)=>console.log(err)
  }

}
