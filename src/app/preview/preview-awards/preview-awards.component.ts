import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-awards',
  templateUrl: './preview-awards.component.html',
  styleUrls: ['./preview-awards.component.scss']
})
export class PreviewAwardsComponent implements OnInit {

  @Input() awards: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
