import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-education',
  templateUrl: './preview-education.component.html',
  styleUrls: ['./preview-education.component.scss']
})
export class PreviewEducationComponent implements OnInit {

  @Input() education: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
