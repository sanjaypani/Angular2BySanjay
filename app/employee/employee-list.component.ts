import { Component } from '@angular/core';

@Component({
    selector : 'employee-list',
    templateUrl:'app/employee/employee-list.component.html'
})
export class EmployeeListComponent{

    pageTitle : string = 'Employee List!';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    employees : any[] = [
     {
        "name": "Sanjay",
        "id": "1",
        "country": "India",
        "salary": "100",
        "starRating": "2.2",
        "imageUrl" : "http://openclipart.org/image/100px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "name": "Jitu",
        "id": "2",
        "country": "Germany",
        "salary": "200",
        "starRating": "2.4",
        "imageUrl": "http://openclipart.org/image/100px/svg_to_png/58471/garden_cart.png"
    }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

}