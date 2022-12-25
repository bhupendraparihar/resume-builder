import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-certificates',
  templateUrl: './preview-certificates.component.html',
  styleUrls: ['./preview-certificates.component.scss']
})
export class PreviewCertificatesComponent implements OnInit {

  @Input() certificates: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
