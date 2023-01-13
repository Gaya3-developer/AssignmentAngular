2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
 
import { Component } from '@angular/core';
 
@Component({
  template: `<h1>Dashboard Component</h1>
   
  <ul>
    <li><a routerLink="user">User</a></li>
    <li> <a routerLink="rights">Rights</a></li>
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class DashboardComponent {
  title = '';
}