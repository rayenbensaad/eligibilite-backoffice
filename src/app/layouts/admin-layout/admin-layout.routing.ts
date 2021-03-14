import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AddArticleComponent } from 'app/add-article/add-article.component';
import { ListArticleComponent } from 'app/list-article/list-article.component';
import { EditArticleComponent } from 'app/edit-article/edit-article.component';
import { ListFormComponent } from 'app/list-form/list-form.component';
import { DetailFormComponent } from 'app/detail-form/detail-form.component';
import { ListContactComponent } from 'app/list-contact/list-contact.component';
import { DetailContactComponent } from 'app/detail-contact/detail-contact.component';
import { NewsletterComponent } from 'app/newsletter/newsletter.component';

export const AdminLayoutRoutes: Routes = [
  //  { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
  //  { path: 'table',          component: TablesComponent },
  //  { path: 'icons',          component: IconsComponent },
  //  { path: 'notifications',  component: NotificationsComponent },
    { path: 'addArticle',     component: AddArticleComponent },
    { path: 'listArticle',     component: ListArticleComponent },
    { path: 'editArticle/:id',     component: EditArticleComponent },
    { path: 'listForm',     component: ListFormComponent },
    { path: 'detailForm/:id',     component: DetailFormComponent },
    { path: 'listContact',     component: ListContactComponent },
    { path: 'detailContact/:id',     component: DetailContactComponent },
    { path: 'newsletters',     component: NewsletterComponent },

];
