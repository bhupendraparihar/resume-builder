import { Component } from '@angular/core';
import { SaveDataService } from './service/save-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'resume-builder';

    constructor(private saveDataService: SaveDataService, private router: Router) { }

    save() {
        this.saveDataService.setSaveResumeData(true);
    }

    reset() {
        if (confirm('Do you want to reset your resume?') == true) {
            localStorage.removeItem('RESUME_DATA');
            this.router.navigate(['/']);
        }
    }
}
