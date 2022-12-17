import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Input() data: any = {};
    @Output() headerUpdateEvent = new EventEmitter<any>();

    constructor(private saveDataService: SaveDataService) { }

    updateHeaderData() {
        console.log(this.data);
        // this.headerUpdateEvent.emit(this.data);
        this.saveDataService.updateResumeSection(SectionType.HEADER, this.data);
    }

    ngOnInit(): void {
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if(value) {
                    this.updateHeaderData();
                }
            })
    }

}
