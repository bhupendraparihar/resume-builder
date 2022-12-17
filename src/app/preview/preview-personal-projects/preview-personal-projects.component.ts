import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-personal-projects',
  templateUrl: './preview-personal-projects.component.html',
  styleUrls: ['./preview-personal-projects.component.scss']
})
export class PreviewPersonalProjectsComponent implements OnInit {

  @Input() personalProjects: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
