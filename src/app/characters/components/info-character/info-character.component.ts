import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-info-character',
  templateUrl: './info-character.component.html',
  styleUrls: ['./info-character.component.scss'],
})
export class InfoCharacterComponent implements OnInit {

  public character_info;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private loadingController: LoadingController
  ) { 
    this.getCharacterInfo();
  }

  ngOnInit() {}

  public redirect() {
    this.router.navigateByUrl("characters")
  }

  private async getCharacterInfo() {
    const loading = await this.loadingController.create({
      message: "Please wait"
    })

    loading.present();

    this.activatedRoute.params
      .subscribe((params) => {
        if(!params.idCharacter){ return }

        this._apiService.getCharacter( params.idCharacter )
            .toPromise()
              .then((info) => {
                this.character_info = info;
                loading.dismiss();
              })
      })
  }
}
