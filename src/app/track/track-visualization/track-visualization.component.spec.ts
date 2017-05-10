import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackVisualizationComponent } from './track-visualization.component';

describe('TrackVisualizationComponent', () => {
  let component: TrackVisualizationComponent;
  let fixture: ComponentFixture<TrackVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
