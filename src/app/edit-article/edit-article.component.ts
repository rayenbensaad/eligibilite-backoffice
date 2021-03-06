import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleServiceService } from 'app/service/article-service.service';
import { ModalService } from 'app/_modal';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  currentArticle = null;
  message = '';

  constructor(
    private articleService: ArticleServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService) { }
    currentUser;

    ngOnInit() {
      this.message = '';
      this.getTutorial(this.route.snapshot.paramMap.get('id'));
      let data = JSON.parse(localStorage.getItem("user"));
      this.currentUser=data;
      if(this.currentUser ==null){
        this.router.navigate(['/']);
      }
    }
  
    getTutorial(id) {
      this.articleService.get(id)
        .subscribe(
          data => {
            this.currentArticle = data;
            //console.log(data);
          },
          error => {
            //console.log(error);
          });
    }
  

  
    updateArticle() {
      this.articleService.update(this.currentArticle.id, this.currentArticle)
        .subscribe(
          response => {
            //console.log(response);
            this.router.navigate(['/listArticle']);
          },
          error => {
            //console.log(error);
          });
    }
  
    deleteArticle() {
      this.articleService.delete(this.currentArticle.id)
        .subscribe(
          response => {
            //console.log(response);
            this.router.navigate(['/listArticle']);
          },
          error => {
            //console.log(error);
          });
    }

  openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
  }