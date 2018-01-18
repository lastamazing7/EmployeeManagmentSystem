import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './EmployeeList/employee-list.component';
import { SearchbarComponent } from './Shared/SearchBar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeListComponent]
})
export class AppModule { }
