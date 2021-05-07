import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  };
  selectedFile :File;
  submitted = false;
  currentUser;

  constructor(private articleService: ArticleServiceService,private router: Router) { }

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem("user"));
      this.currentUser=data;
      if(this.currentUser ==null){
        this.router.navigate(['/']);
      }
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    this.selectedFile=file;
    var formData = new FormData();  
    //formData.append('File', this.selectedFile, this.selectedFile.name);
    ////console.log(this.selectedFile) 
    //console.log(this.selectedFile.name);

    
  }
  saveArticle() {
    
    var formData = new FormData();  
    formData.append('author', this.post.author);
    formData.append('subject', this.post.subject);
    formData.append('content', this.post.content);
    formData.append('file', this.selectedFile, this.selectedFile.name);
    
    const data = {
      author: this.post.author,
      subject: this.post.subject,
      content: this.post.content,
      picture: this.selectedFile
    };

    this.articleService.create(formData)
      .subscribe(
        response => {
          //console.log(response);
          this.submitted = true;
        },
        error => {
          //console.log(error);
        });
  }

  newArticle() {
    this.submitted = false;
    this.post = {
      author: '',
      subject: '',
      content: '',
     
    };
  }

}
