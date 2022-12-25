import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAwardsComponent } from './preview-awards.component';

describe('PreviewAwardsComponent', () => {
  let component: PreviewAwardsComponent;
  let fixture: ComponentFixture<PreviewAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
