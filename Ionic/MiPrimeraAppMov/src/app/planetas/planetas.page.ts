import { Component, OnInit } from '@angular/core';
import { PlanetasService } from '../planetas.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.page.html',
  styleUrls: ['./planetas.page.scss'],
})
export class PlanetasPage implements OnInit {
  arrayPlanetas: any = []
  constructor(
    private planetaService: PlanetasService,
    private alertcontroller: AlertController
  ) { }

  ngOnInit() {
    console.log("planetas.page")

    this.planetaService.getAll()
      .then((result) => { this.arrayPlanetas = result['results'] })
      .catch((error) => { console.log(error) })
  }

  async click(item) {

    (await this.alertcontroller.create({ header: "Alert", message: `nombre: ${item.name} ` })).present()
  }

}
