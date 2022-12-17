import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-objective',
  templateUrl: './preview-objective.component.html',
  styleUrls: ['./preview-objective.component.scss']
})
export class PreviewObjectiveComponent implements OnInit {

  @Input() objective: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
