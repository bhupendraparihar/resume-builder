import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-experience',
  templateUrl: './preview-experience.component.html',
  styleUrls: ['./preview-experience.component.scss']
})
export class PreviewExperienceComponent implements OnInit {
  @Input() experience: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
