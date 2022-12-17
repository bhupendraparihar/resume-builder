import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPersonalProjectsComponent } from './preview-personal-projects.component';

describe('PreviewPersonalProjectsComponent', () => {
  let component: PreviewPersonalProjectsComponent;
  let fixture: ComponentFixture<PreviewPersonalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPersonalProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPersonalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
