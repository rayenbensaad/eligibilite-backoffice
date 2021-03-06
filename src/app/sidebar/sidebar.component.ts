import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'profil',  icon:'pe-7s-user', class: '' },
   // { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
   { path: '/listArticle', title: 'Liste des Articles',  icon:'pe-7s-note2', class: '' },
    { path: '/addArticle', title: 'Ajouter un Article',  icon:'pe-7s-pen', class: '' },
   
    //{ path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/listForm', title: 'Liste des réponses',  icon:'pe-7s-bookmarks', class: '' },
    { path: '/listContact', title: 'Contacts',  icon:'pe-7s-id', class: '' },
    { path: '/newsletters', title: 'Newsletters',  icon:'pe-7s-id', class: '' },
    //{ path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
   // { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
   // { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
   // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  logOut(){

    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
