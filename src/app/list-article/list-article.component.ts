import { Component, OnInit } from '@angular/core';
import { ArticleServiceService } from 'app/service/article-service.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: any;
  currentArticle = null;
  currentIndex = -1;
  subject = '';

  constructor(private articleService: ArticleServiceService) { }

  ngOnInit(): void {
    this.retrieveArticles();
  }
  retrieveArticles() {
    this.articleService.getAll()
      .subscribe(
        data => {
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveArticles();
    this.currentArticle = null;
    this.currentIndex = -1;
  }

  setActiveArticle(article, index) {
    this.currentArticle = article;
    this.currentIndex = index;
  }

  removeAllArticles() {
    this.articleService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }


}
