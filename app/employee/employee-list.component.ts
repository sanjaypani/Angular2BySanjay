import { Component , OnInit } from '@angular/core';
import { IEmployee } from './employee'

@Component({
    selector : 'employee-list',
    templateUrl:'app/employee/employee-list.component.html',
    styleUrls:['app/employee/employee-list.component.css'],
    })
export class EmployeeListComponent implements OnInit{

    pageTitle : string = 'Employee List!';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    listFilter : string = 'Sanjay';
    employees : IEmployee[] = [
     {
        "name": "Sanjay",
        "id": 1,
        "country": "India",
        "salary": "100",
        "starRating": 5,
        "imageUrl" : "http://openclipart.org/image/100px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "name": "Jitu",
        "id": 2,
        "country": "Germany",
        "salary": "200",
        "starRating": 5,
        "imageUrl": "http://openclipart.org/image/100px/svg_to_png/58471/garden_cart.png"
    }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    ngOnInit() : void {
        console.log(this.pageTitle);


    }

    onRatingsClicked(message : string): void {
        this.pageTitle = 'Employee List !' + message;
    }

}