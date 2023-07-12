import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { HerramientasModule } from 'src/app/core/herramientas/herramientas.module';
import { FormularioComponent } from './formulario/formulario.component';
import { {xnombrecapx}RoutingModule } from './{xnombrex}-routing.module';

@NgModule({
  declarations: [
    ListadoComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    {xnombrecapx}RoutingModule,
    HerramientasModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class {xnombrecapx}Module { }
