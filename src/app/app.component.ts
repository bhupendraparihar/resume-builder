import { Component } from '@angular/core';
import { SaveDataService } from './service/save-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'resume-builder';

    constructor(private saveDataService: SaveDataService) { }

    save() {
        this.saveDataService.setSaveResumeData(true);
    }
}
