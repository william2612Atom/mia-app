import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaliComponent } from './animali.component';

describe('AnimaliComponent', () => {
  let component: AnimaliComponent;
  let fixture: ComponentFixture<AnimaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
