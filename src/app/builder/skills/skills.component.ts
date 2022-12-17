import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    @Input() skills: any = [];


    constructor(private saveDataService: SaveDataService) { }

    updateSkills() {
        if (!Array.isArray(this.skills)) {
            this.skills = this.skills.split(',').map((item:string) => item.trim());
        }

        console.log(this.skills);
        this.saveDataService.updateResumeSection( SectionType.SKILLS, this.skills);
    }

    ngOnInit(): void {
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateSkills();
                }
            })
    }



}
