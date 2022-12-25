import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderComponent } from './builder/builder.component';
import { PreviewComponent } from './preview/preview.component';
import { HeaderComponent } from './builder/header/header.component';
import { AboutMeComponent } from './builder/executive-summary/executive-summary.component';
import { SkillsComponent } from './builder/skills/skills.component';
import { ExperienceComponent } from './builder/experience/experience.component';
import { ProjectsComponent } from './builder/projects/projects.component';
import { EducationComponent } from './builder/education/education.component';
import { PreviewHeaderComponent } from './preview/preview-header/preview-header.component';
import { PreviewSkillsComponent } from './preview/preview-skills/preview-skills.component';
import { PreviewExperienceComponent } from './preview/preview-experience/preview-experience.component';
import { PreviewEducationComponent } from './preview/preview-education/preview-education.component';
import { PreviewAboutmeComponent } from './preview/preview-aboutme/preview-aboutme.component';
import { PreviewProjectsComponent } from './preview/preview-projects/preview-projects.component';
import { PreviewPersonalProjectsComponent } from './preview/preview-personal-projects/preview-personal-projects.component';
import { PreviewObjectiveComponent } from './preview/preview-objective/preview-objective.component';


import {MatTabsModule} from '@angular/material/tabs';
import { AwardsComponent } from './builder/awards/awards.component';
import { CertificatesComponent } from './builder/certificates/certificates.component';
import { PreviewCertificatesComponent } from './preview/preview-certificates/preview-certificates.component';
import { PreviewAwardsComponent } from './preview/preview-awards/preview-awards.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    PreviewComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    PreviewHeaderComponent,
    PreviewSkillsComponent,
    PreviewExperienceComponent,
    PreviewEducationComponent,
    PreviewAboutmeComponent,
    PreviewProjectsComponent,
    PreviewPersonalProjectsComponent,
    PreviewObjectiveComponent,
    AwardsComponent,
    CertificatesComponent,
    PreviewCertificatesComponent,
    PreviewAwardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
