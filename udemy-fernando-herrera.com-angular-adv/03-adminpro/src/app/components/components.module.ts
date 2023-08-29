import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import {FormsModule} from "@angular/forms";
import { DonaComponent } from './dona/dona.component';
import {NgChartsModule} from "ng2-charts";
import { PromesasComponent } from './promesas/promesas.component';



@NgModule({
  declarations: [
    IncrementadorComponent,
    DonaComponent,
    PromesasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
