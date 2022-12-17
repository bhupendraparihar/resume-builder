import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    @Input() experiences: any = [];
    constructor(private saveDataService: SaveDataService) { }

    updateExperiences() {
        console.log(this.experiences);
        this.saveDataService.updateResumeSection(SectionType.EXPERIENCE, this.experiences);
    }

    ngOnInit(): void {
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateExperiences();
                }
            })
    }


    addExperienceSection() {
        const experienceNumber = this.experiences.length + 1;
        this.experiences.push({
            "id": experienceNumber.toString(),
            "company": `Sample Company ${experienceNumber}`,
            "link": "http://www.xyz.com/",
            "title": "Software Engineer",
            "startDate": "June 2017",
            "endDate": "June 2020",
            "responsibilities": "At XYZ we follow Agile methodologies, and I am involved in creating mobile and desktop based application."
        })
    }

    deleteExperience(id: string) {
        this.experiences = this.experiences.filter((item: any) => item.id !== id) || [];

        this.experiences.forEach((item: any, index: number) => {
            item.id = index + 1 + '';
        })
    }

}
