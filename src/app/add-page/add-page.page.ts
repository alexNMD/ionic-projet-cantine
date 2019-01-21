import { Component, OnInit } from '@angular/core';
import { Plat } from '../plat';
import {PlatManagerService} from '../plat-manager.service';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.page.html',
  styleUrls: ['./add-page.page.scss'],
})
export class AddPagePage implements OnInit {
  constructor(private PlatService: PlatManagerService) { }

  ngOnInit() {
  }
    addPlat(newPlat) {
    console.log(newPlat.value);
    newPlat.value.ingredients = newPlat.value.ingredients.split(';');
    this.PlatService.addPlat(newPlat.value)
        .subscribe(data => {
            let plat: Object = {key: Object.values(data)[0], values: newPlat.value};
        });
}

}
