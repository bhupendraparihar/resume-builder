import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

    @Input() educations: any = [];

    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        console.log(this.educations);
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateEducations();
                }
            })
    }

    updateEducations() {
        console.log(this.educations);
        this.saveDataService.updateResumeSection(SectionType.EDUCATIONS, this.educations);
    }

    addNewEducation() {
        const educationNumber = this.educations.length + 1;
        this.educations.push({
            "id": educationNumber.toString(),
            "school": "Government Engineering College, Bilaspur, Chhattisgarh, India",
            "startDate": "2005",
            "endDate": "2009",
            "program": "Bachelor of Engineering in Information Technology",
            "achievements": "7.95 CPI(Cumulative Performance Index)/ 71.6%(Percentage)"
        })
    }

    deleteEducation(id: string) {
        this.educations = this.educations.filter((project: any) => project.id !== id) || [];

        this.educations.forEach((project: any, index: number) => {
            project.id = index + 1 + '';
        })
    }

}
