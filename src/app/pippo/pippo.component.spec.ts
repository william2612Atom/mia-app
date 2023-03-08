import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PippoComponent } from './pippo.component';

describe('PippoComponent', () => {
  let component: PippoComponent;
  let fixture: ComponentFixture<PippoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PippoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PippoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
