import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from 'app/service/article-service.service';
import { ModalService } from 'app/_modal';

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

  constructor(private articleService: ArticleServiceService,
    private router: Router ,private modalService: ModalService) { }

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


  deleteArticle(id: string) {
    console.log(this.currentArticle.id)
    this.articleService.delete(this.currentArticle.id)
      .subscribe(
        response => {
          console.log(response),
          this.modalService.close(id),
          this.retrieveArticles()
        },
        error => {
          console.log(error);
        });
  }

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

}
