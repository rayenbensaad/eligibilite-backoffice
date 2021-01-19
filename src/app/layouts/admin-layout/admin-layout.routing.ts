import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { AddArticleComponent } from 'app/add-article/add-article.component';
import { ListArticleComponent } from 'app/list-article/list-article.component';
import { EditArticleComponent } from 'app/edit-article/edit-article.component';
import { ListFormComponent } from 'app/list-form/list-form.component';
import { DetailFormComponent } from 'app/detail-form/detail-form.component';
import { ListContactComponent } from 'app/list-contact/list-contact.component';
import { DetailContactComponent } from 'app/detail-contact/detail-contact.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'addArticle',     component: AddArticleComponent },
    { path: 'listArticle',     component: ListArticleComponent },
    { path: 'editArticle/:id',     component: EditArticleComponent },
    { path: 'listForm',     component: ListFormComponent },
    { path: 'detailForm/:id',     component: DetailFormComponent },
    { path: 'listContact',     component: ListContactComponent },
    { path: 'detailContact/:id',     component: DetailContactComponent },

];
