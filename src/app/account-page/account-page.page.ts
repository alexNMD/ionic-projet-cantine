import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.page.html',
  styleUrls: ['./account-page.page.scss'],
})
export class AccountPagePage implements OnInit {

  user: string = "Julien";
  promo: string ="MCDNT-5";
  email: string = "julien.feger@gmail.com";
  regime: string = "Pas de fromage";
  cagnotte: number = 150;
  
  constructor() { }

  ngOnInit() {
  }

}
