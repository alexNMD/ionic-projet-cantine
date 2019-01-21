import { Component, OnInit } from '@angular/core';
import { PlatManagerService } from '../plat-manager.service';
import { Plat } from '../plat';
import {AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  platsDuJour: any[] = [];
  constructor(private platService: PlatManagerService, public alertController: AlertController, public navCtrl: NavController) {}

  ngOnInit()
  {
    this.getPlat();
  }

  //TODO : optimiser l'affichage front des plats du jour.
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
    async deletePlat(key) {
        const alert = await this.alertController.create({
            header: 'Etes vous sûr ?!',
            message: 'Voulez vous supprimer ce <strong>plat</strong> ?',
            buttons: [
                {
                    text: 'Non',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                }, {
                    text: 'Oui',
                    handler: () => {
                        this.platService.deletePlat(key).subscribe();
                        console.log('Confirm Okay');
                    }
                }
            ]
        });

        await alert.present();
    }

}
