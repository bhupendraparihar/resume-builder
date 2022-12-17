import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-skills',
  templateUrl: './preview-skills.component.html',
  styleUrls: ['./preview-skills.component.scss']
})
export class PreviewSkillsComponent implements OnInit {

  @Input() skills:  string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
