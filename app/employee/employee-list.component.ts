import { Component } from '@angular/core';

@Component({
    selector : 'employee-list',
    templateUrl:'app/employee/employee-list.component.html'
})
export class EmployeeListComponent{

    pageTitle : string = 'Employee List!';
    employees : any[] = [
     {
        "name": "Sanjay",
        "id": "1",
        "country": "India",
        "salary": "100",
        "starRating": "2.2"
    },
    {
        "name": "Jitu",
        "id": "2",
        "country": "Germany",
        "salary": "200",
        "starRating": "2.4"
    }
    ]

}