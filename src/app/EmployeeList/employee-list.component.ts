import { Component, OnInit } from "@angular/core";
import { EmployeeModel } from "../Models/EmployeeModel";

@Component({
    selector: 'employee-list',
    templateUrl: 'employee-list.component.html',
    moduleId: module.id
})

export class EmployeeListComponent implements OnInit {
    public EmployeeList: Array<EmployeeModel> = [];
    public placeHolder : string = "Employee .."
    public LoadIntialData(filterText: string): void {
        this.EmployeeList = [{
            EmployeeID: 1,
            FirstName: 'test FirstName',
            LastName: 'test LastName',
            ContactNo: '123456',
            Designation: 'Developer'
        },
        {
            EmployeeID: 2,
            FirstName: 'test FirstName 02',
            LastName: 'test LastName 02',
            ContactNo: '12345602',
            Designation: 'Developer 02'
        },
        {
            EmployeeID: 3,
            FirstName: 'test FirstName 03',
            LastName: 'test LastName 03',
            ContactNo: '12345603',
            Designation: 'Developer 03'
        }
        ]

        if (filterText != "") {
            var afterFilterEmployeeList: Array<EmployeeModel> = [];
            this.EmployeeList.forEach(element => {
                if (element.FirstName.toLowerCase().includes(filterText) || element.LastName.toLowerCase().includes(filterText)) {
                    afterFilterEmployeeList.push(element);
                }
            });

            this.EmployeeList = afterFilterEmployeeList;
        }
    }

    ngOnInit() {
        this.LoadIntialData("");
    }

    OnEmployeeSerach(serachText): void {
        this.LoadIntialData(serachText);
    }

}