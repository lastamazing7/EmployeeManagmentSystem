import { Component,Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'search-bar',
    templateUrl: 'search-bar.component.html',
    moduleId: module.id
})

export class SearchbarComponent {
    @Input()
    PlaceHolderText: string = "Search....";

    @Output()
    Search = new EventEmitter<string>();

    OnSearch(searchText): void {
        this.Search.emit(searchText);
    }
}