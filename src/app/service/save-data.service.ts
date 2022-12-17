import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import SectionType from '../enum/section-type.enum';

@Injectable({
    providedIn: 'root'
})
export class SaveDataService {
    private resumeData: any = {};
    private _saveResumeData = new BehaviorSubject<boolean>(false);
    private _saveResumeData$ = this._saveResumeData.asObservable();

    getSaveResumeData(): Observable<Boolean>{
        return this._saveResumeData$;
    }

    setSaveResumeData(value: boolean) {
        return this._saveResumeData.next(value);
    }

    getResumeData() {
        const resumeDataStr = localStorage.getItem('RESUME_DATA');
        if (resumeDataStr)
            return JSON.parse(resumeDataStr)

        return {};
    }

    saveResumeDataToLocalStorage() {
        localStorage.setItem('RESUME_DATA', JSON.stringify(this.resumeData));
    }

    updateResumeSection(sectionType: SectionType, data: any) {
        this.resumeData[sectionType] = data;
        this.saveResumeDataToLocalStorage();
    }

    constructor() { }
}
