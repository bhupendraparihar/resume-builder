import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-certificates',
    templateUrl: './certificates.component.html',
    styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

    @Input() certificates: any = [];

    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        console.log(this.certificates);
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateCertifications();
                }
            })
    }

    updateCertifications() {
        console.log(this.certificates);
        this.saveDataService.updateResumeSection(SectionType.CERTIFICATES, this.certificates);
    }

    addNewCertificate() {
        const certificateNumber = this.certificates.length + 1;
        this.certificates.push({
            "id":certificateNumber.toString(),
            "title": "JavaScript Algorithms & Data Structures",
            "organization": "FreeCodeCamp",
            "validTill": "2025"
        })
    }

    deleteCertification(id: string) {
        this.certificates = this.certificates.filter((project: any) => project.id !== id) || [];

        this.certificates.forEach((project: any, index: number) => {
            project.id = index + 1 + '';
        })
    }

}
