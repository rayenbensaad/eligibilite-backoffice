import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { ListArticleComponent } from './list-article/list-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ListFormComponent } from './list-form/list-form.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { DetailContactComponent } from './detail-contact/detail-contact.component';
import { ModalModule } from './_modal';
import { ExcelService } from './service/excel.service';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    ModalModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddArticleComponent,
    ListArticleComponent,
    EditArticleComponent,
    ListFormComponent,
    DetailFormComponent,
    ListContactComponent,
    DetailContactComponent
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
