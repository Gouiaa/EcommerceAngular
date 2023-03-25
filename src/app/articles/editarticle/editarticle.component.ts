import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/model/article';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-editarticle',
  templateUrl: './editarticle.component.html',
  styleUrls: ['./editarticle.component.css']
})
export class EditarticleComponent {
  id:object
  article: Article = new Article()
  
  constructor(private artserv : ArticleService, private route : ActivatedRoute ){}
  ngOnInit(){
    this.id= this.route.snapshot.params['id'];
    this.artserv.GetArticleByID(this.id).subscribe(data=>this.article=data)
  }

}
