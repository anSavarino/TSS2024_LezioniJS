import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './model/post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url: string = 'https://dummyjson.com/posts';
  posts: Post[];

  constructor(private http: HttpClient) { }

  getPosts(){
    // riceverò dei dati che saranno un observable --> devo fare il subscribe
    // return this.http.get(this.url).subscribe((postsAPI: Post[]) => {
    //   this.posts = postsAPI['posts'];
    //   console.log(postsAPI['posts']);
    // })

    //quetso metodo esegue la chiamata get e restituisce un observable su cui fare il subscribe
    //il subscribe lo faccio nel componente che sfrutta il servizio

    return this.http.get<Post[]>(this.url); 
  }
}
