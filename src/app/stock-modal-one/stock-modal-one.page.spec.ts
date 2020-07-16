import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StockModalOnePage } from './stock-modal-one.page';

describe('StockModalOnePage', () => {
  let component: StockModalOnePage;
  let fixture: ComponentFixture<StockModalOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockModalOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StockModalOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
