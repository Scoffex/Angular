import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericErrorComponentComponent } from './generic-error-component.component';

describe('GenericErrorComponentComponent', () => {
  let component: GenericErrorComponentComponent;
  let fixture: ComponentFixture<GenericErrorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericErrorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericErrorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
