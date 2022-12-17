import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../service/save-data.service';
import resumeData  from './../../api/resume';

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
    resume = resumeData;
    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        this.resume = this.saveDataService.getResumeData();
    }

}
