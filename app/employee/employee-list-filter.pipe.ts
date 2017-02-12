import { PipeTransform, Pipe} from "@angular/core";
import {IEmployee} from "./employee";

@Pipe({
    name : 'employeeFilter'
})
export class employeeListFilterPipe implements PipeTransform {

    transform(value: IEmployee[], args : string[]): IEmployee[] {

        let filter : string = args[0]?args[0].toLocaleLowerCase():null;
        return filter? value.filter((employee:IEmployee) =>
            employee.name.toLocaleLowerCase().indexOf(filter)!=1):value ;
    }

}