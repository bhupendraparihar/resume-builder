import { Component, OnInit } from '@angular/core';
import { SaveDataService } from '../service/save-data.service';

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
    public resume = {
        header: {
            name: 'John Doe',
            title: 'Full Stack Developer',
            email: 'xyz@gmail.com',
            website: 'https://xwz.com',
            linkedin: 'https://linkedid/xyz',
            phoneNumber: '9000000000',
            github: 'https://github.com/johndoe',
        },
        aboutme: '',
        skills: ["Java", "JavaScript"],
        experience: [],
        projects: [],
        educations: [],
        certificates: [],
        awards: []
    }

    constructor(private saveDataService: SaveDataService) { }

    save() {
        this.saveDataService.setSaveResumeData(true);
    }

    updateHeaderData(headerData: any) {
        console.log(headerData);
    }

    ngOnInit(): void {
        if (this.saveDataService.getResumeData()?.header) {
            this.resume = this.saveDataService.getResumeData();
        }
        console.log(this.resume.projects)
    }

}
