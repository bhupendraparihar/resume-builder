import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  @Input() awards: any = [];

    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        console.log(this.awards);
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateCertifications();
                }
            })
    }

    updateCertifications() {
        console.log(this.awards);
        this.saveDataService.updateResumeSection(SectionType.AWARDS, this.awards);
    }

    addNewAward() {
        const certificateNumber = this.awards.length + 1;
        this.awards.push({
            "id":certificateNumber.toString(),
            "title": "Played National level cricket in year 2010"
        })
    }

    deleteAward(id: string) {
        this.awards = this.awards.filter((project: any) => project.id !== id) || [];

        this.awards.forEach((project: any, index: number) => {
            project.id = index + 1 + '';
        })
    }


}
