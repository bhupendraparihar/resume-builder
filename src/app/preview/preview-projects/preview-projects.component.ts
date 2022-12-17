import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-projects',
  templateUrl: './preview-projects.component.html',
  styleUrls: ['./preview-projects.component.scss']
})
export class PreviewProjectsComponent implements OnInit {

  @Input() projects: any = [];
  constructor() { }

  ngOnInit(): void {
  }

}
