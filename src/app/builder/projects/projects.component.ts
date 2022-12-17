import { Component, Input, OnInit } from '@angular/core';
import SectionType from 'src/app/enum/section-type.enum';
import { SaveDataService } from 'src/app/service/save-data.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    @Input() projects: any = [];

    constructor(private saveDataService: SaveDataService) { }

    ngOnInit(): void {
        console.log(this.projects)
        this.saveDataService.getSaveResumeData()
            .subscribe(value => {
                if (value) {
                    this.updateProjects();
                }
            })
    }

    updateProjects() {
        console.log(this.projects);
        this.saveDataService.updateResumeSection(SectionType.PROJECTS, this.projects);
    }

    addNewProject() {
        const projectNumber = this.projects.length + 1;
        this.projects.push({
            "id": projectNumber.toString(),
            "name": `Sample Project ${projectNumber}`,
            "technologies": "Angular2, TypeScript, Grunt, GIT",
            "description": "Swag of India is a responsive e-commerce website. The technologies used in this project are HTML, CSS, Vanilla JavaScript and Bootstrap. There are a few important modules in the project like home page, image carousel, product listing page, product page, cart page, wishlist page etc. The data is accessed using ajax call and then rendered into the webpage using dynamic html template created using string literals. For cart-page I am using localstorage to temporarily store data before clicking on the checkout button. I took almost 40 - 50 hrs to complete this project. SkillLync helped me by providing the wire-frames for all relevant feature pages.",
            "url": "https://github.com"
        })
    }

    deleteProject(id: string) {
        this.projects = this.projects.filter((project: any) => project.id !== id) || [];

        this.projects.forEach((project: any, index: number) => {
            project.id = index + 1 + '';
        })
    }

}
