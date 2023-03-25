import { Component } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../model/article';


@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  constructor(private artserv:ArticleService) { }
article:Article[] ;
ngOnInit(): void {
this.loadArticles();
}
loadArticles () {
return this.artserv.ListArticles().subscribe((data: Article[] ) =>this.article = data),
(err:any)=>console.log(err)
}
DeleteArticle(id:object){
return this.artserv.DeleteArticle(id).subscribe((data : Article)=>{this.DeleteArticle});
}


}
