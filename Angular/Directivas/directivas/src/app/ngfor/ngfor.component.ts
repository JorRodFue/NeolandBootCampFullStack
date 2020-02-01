import { Component, OnInit } from '@angular/core';
import { Episodio } from '../models/episodio.model';
@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styles: []
})
export class NgforComponent implements OnInit {

  episodios: Episodio[]

  constructor() {

    this.episodios = []
  }

  ngOnInit() {
    this.episodios = [
      { title: 'Winter Is Coming', director: 'Tim Van Patten' },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }
    ]
    console.log(this.episodios)

  }


}
