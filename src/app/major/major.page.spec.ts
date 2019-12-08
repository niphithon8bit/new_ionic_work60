import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MajorPage } from './major.page';

describe('MajorPage', () => {
  let component: MajorPage;
  let fixture: ComponentFixture<MajorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MajorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
