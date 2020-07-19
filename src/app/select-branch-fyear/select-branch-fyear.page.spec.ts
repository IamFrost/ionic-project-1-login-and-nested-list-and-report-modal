import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectBranchFyearPage } from './select-branch-fyear.page';

describe('SelectBranchFyearPage', () => {
  let component: SelectBranchFyearPage;
  let fixture: ComponentFixture<SelectBranchFyearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBranchFyearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectBranchFyearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
