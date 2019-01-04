import { Component, OnInit } from '@angular/core';
import { PlatManagerService } from '../plat-manager.service'
import { Plat } from '../plat';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  platsDuJour: any[] = [];
  
  constructor(private platService: PlatManagerService){}

  ngOnInit()
  {
    this.getPlat();
  }

  getPlat(): void {
    this.platService.getPlat()
        .subscribe(data => {
            let cle = Object.keys(data);
            let donnees = Object.values(data);
            for (let i = 0; i < cle.length; i++) {
                this.platsDuJour.push({key: cle[i], values:donnees[i]});
            }
        });
    console.log(this.platsDuJour);
  }

}
