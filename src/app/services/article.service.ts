import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Article} from '../model/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  baseurl="http://localhost:3001/api/articles";

  constructor(private http:HttpClient) {}
  ListArticles():Observable<Article[]>
{
return this.http.get<Article[]>(this.baseurl);
}
AddArticle (art: Article ):Observable<Article>
{
return this.http.post<Article>(this.baseurl+ '/',art);
}
GetArticle(id:object):Observable<Article>
{
return this.http.get<Article>(this.baseurl+ '/' + id);
}
UpdateArticle(id:object,art:Article): Observable<Article>
{
return this.http.put<Article>(this.baseurl + '/' + id,art);
}
DeleteArticle(id:object):Observable<Article>
{
return this.http.delete<Article>(this.baseurl + '/' + id);
}
GetArticleByID(id:object):Observable<Article>
{
return this.http.get<Article>(this.baseurl+ '/' + id);
}

}


