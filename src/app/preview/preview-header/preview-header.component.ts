import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-header',
  templateUrl: './preview-header.component.html',
  styleUrls: ['./preview-header.component.scss']
})
export class PreviewHeaderComponent implements OnInit {
  @Input() header: any;
  constructor() { }

  ngOnInit(): void {
  }

}
