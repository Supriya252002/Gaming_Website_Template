import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualsectionComponent } from './visualsection.component';

describe('VisualsectionComponent', () => {
  let component: VisualsectionComponent;
  let fixture: ComponentFixture<VisualsectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualsectionComponent]
    });
    fixture = TestBed.createComponent(VisualsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
