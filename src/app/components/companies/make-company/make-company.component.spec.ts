import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCompanyComponent } from './make-company.component';

describe('MakeCompanyComponent', () => {
  let component: MakeCompanyComponent;
  let fixture: ComponentFixture<MakeCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MakeCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
