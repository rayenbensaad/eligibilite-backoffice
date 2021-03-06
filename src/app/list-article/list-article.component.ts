import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleServiceService } from 'app/service/article-service.service';
import { ExcelService } from 'app/service/excel.service';
import { ModalService } from 'app/_modal';
import jsPDF from 'jspdf';
import * as _html2canvas from "html2canvas";

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  html2canvas: any = _html2canvas;

  articles: any;
  currentArticle = null;
  currentIndex = -1;
  subject = '';
  currentUser;

  constructor(private articleService: ArticleServiceService,
    private router: Router ,private modalService: ModalService,private excelService:ExcelService) { }

  ngOnInit(): void {
    this.retrieveArticles();
    let data = JSON.parse(localStorage.getItem("user"));
    this.currentUser=data;
    if(this.currentUser ==null){
      this.router.navigate(['/']);
    }
  }
  retrieveArticles() {
    this.articleService.getAll()
      .subscribe(
        data => {
          this.articles = data;
         // console.log(data);
        },
        error => {
         // console.log(error);
        });
  }

  public openPDF():void {
    let DATA = document.getElementById('htmlData');
        
    this.html2canvas(DATA).then(canvas => {
        
        let fileWidth = 208;
        let fileHeight = canvas.height * fileWidth / canvas.width;
        
        const FILEURI = canvas.toDataURL('image/png')
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
        
        PDF.save('tableau_articles.pdf');
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

  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.articles, 'articles_data');
  }

  removeAllArticles(id: string) {
    this.articleService.deleteAll()
      .subscribe(
        response => {
          //console.log(response);
          this.modalService.close(id);
          this.refreshList();
        },
        error => {
          //console.log(error);
        });
  }


  deleteArticle(id: string) {
    //console.log(this.currentArticle.id)
    this.articleService.delete(this.currentArticle.id)
      .subscribe(
        response => {
         // console.log(response),
          this.modalService.close(id),
          this.retrieveArticles()
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
