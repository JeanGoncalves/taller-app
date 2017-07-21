import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterpriseComponent } from './new-enterprise.component';

describe('NewEnterpriseComponent', () => {
  let component: NewEnterpriseComponent;
  let fixture: ComponentFixture<NewEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
