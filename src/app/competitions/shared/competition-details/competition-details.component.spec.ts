import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailsComponent } from './competition-details.component';

describe('CompetitionListItemComponent', () => {
  let component: CompetitionDetailsComponent;
  let fixture: ComponentFixture<CompetitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});