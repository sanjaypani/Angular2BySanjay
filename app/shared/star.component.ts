/**
 * Created by Jitu on 2/12/2017.
 */

import {Component, OnChanges, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector : 'my-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls : ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {

    @Input() rating : number;
    starWidth : number;

    @Output() ratingsClicked : EventEmitter <string> = new EventEmitter <String>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    onClicked(): void {
        console.log(this.rating);
        this.ratingsClicked.emit(`The Rating ${this.rating} was clicked`);

    }
}
