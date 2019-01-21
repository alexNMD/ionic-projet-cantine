import { Component, OnInit } from '@angular/core';
import {PlatManagerService} from '../plat-manager.service';
import {ActivatedRoute} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {
  private key: string;
  plat: Object;
  constructor(private route: ActivatedRoute, private PlatService: PlatManagerService, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getPlatByKey(this.key);
  }
    getPlatByKey(key) {
        this.PlatService.getPlatByKey(key)
            .subscribe(data => {
                this.plat = data;
                this.plat.ingredients = this.plat.ingredients.toString().replace(/,/g, ';');
            });
    }
    async presentToast(message) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
    editPlat(updatedPlat) {
        if (
            updatedPlat.value.name === '' ||
            updatedPlat.value.price === '' ||
            updatedPlat.value.type_dish === '' ||
            updatedPlat.value.temp === '' ||
            updatedPlat.value.ingredients === '' ||
            updatedPlat.value.image === '' ||
            updatedPlat.value.image === '' ||
            updatedPlat.value.date === ''
        ) {
            this.presentToast('Tous les champs doivent être remplis !');
        } else {

            updatedPlat.value.ingredients = updatedPlat.value.ingredients.split(';');
            this.PlatService.editPlat(updatedPlat.form.value, this.key)
                .subscribe(data => {});
            this.presentToast('Modification effectuée !');
        }
    }
}
