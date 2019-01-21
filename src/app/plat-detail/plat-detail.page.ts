import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlatManagerService} from '../plat-manager.service';

@Component({
  selector: 'app-plat-detail',
  templateUrl: './plat-detail.page.html',
  styleUrls: ['./plat-detail.page.scss'],
})
export class PlatDetailPage implements OnInit {
  private key: string;
  plat: Object;
  constructor(private route: ActivatedRoute, private platService: PlatManagerService) { }

  ngOnInit() {
    this.key = this.route.snapshot.paramMap.get('key');
    this.getPlatByKey(this.key);
  }
  getPlatByKey(key) {
        this.platService.getPlatByKey(key)
            .subscribe(data => {
                this.plat = data;
            });
    }

}
