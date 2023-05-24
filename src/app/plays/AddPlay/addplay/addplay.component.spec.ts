import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplayComponent } from './addplay.component';

describe('AddplayComponent', () => {
  let component: AddplayComponent;
  let fixture: ComponentFixture<AddplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
