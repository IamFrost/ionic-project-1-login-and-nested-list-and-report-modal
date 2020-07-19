import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginModalOnePage } from './login-modal-one.page';

describe('LoginModalOnePage', () => {
  let component: LoginModalOnePage;
  let fixture: ComponentFixture<LoginModalOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginModalOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginModalOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
