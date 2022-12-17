import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './executive-summary.component.html',
    styleUrls: ['./executive-summary.component.scss']
})
export class AboutMeComponent implements OnInit {

    @Input() aboutme: string = 'I am passionate about writing and testing my code, learning new things, and teaching others. I enjoy understanding problems, finding their solutions, making them simplified. I enjoy writing and contributing to open source software. I also enjoy speaking at conferences and local user groups about JavaScript.';
    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        console.log(this.aboutme)
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateAboutMe();
                }
            })
    }

    updateAboutMe() {
        console.log(this.aboutme);
        this.saveDataService.updateResumeSection(SectionType.ABOUTME, this.aboutme);
    }

}
