import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Post } from './model/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

mieiPosts: Post[];  

  constructor(private blogServ: BlogService) {

  }

  ngOnInit(): void {
    // this.blogServ.getPosts();
    // this.mieiPosts = this.blogServ.posts;
    
    this.blogServ.getPosts().subscribe((posts: Post[]) =>{
      this.mieiPosts = posts['posts'];
    })


  }
}
