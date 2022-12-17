import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAboutmeComponent } from './preview-aboutme.component';

describe('PreviewAboutmeComponent', () => {
  let component: PreviewAboutmeComponent;
  let fixture: ComponentFixture<PreviewAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
