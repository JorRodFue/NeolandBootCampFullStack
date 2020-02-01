import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlanetasPage } from './planetas.page';

describe('PlanetasPage', () => {
  let component: PlanetasPage;
  let fixture: ComponentFixture<PlanetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
