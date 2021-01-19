import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'app/service/article-service.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  post = {
    author: '',
    subject: '',
    content: '',
    picture:''
  };
  submitted = false;

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
  }

  saveArticle() {
    const data = {
      author: this.post.author,
      subject: this.post.subject,
      content: this.post.content,
      picture: this.post.picture
    };

    this.articleService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newArticle() {
    this.submitted = false;
    this.post = {
      author: '',
      subject: '',
      content: '',
      picture:''
    };
  }

}
