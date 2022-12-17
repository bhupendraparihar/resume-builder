import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-aboutme',
  templateUrl: './preview-aboutme.component.html',
  styleUrls: ['./preview-aboutme.component.scss']
})
export class PreviewAboutmeComponent implements OnInit {

  @Input() aboutme: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
