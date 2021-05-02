import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmpleadosComponent } from './component/create-empleados/create-empleados.component';
import { ListEmpleadosComponent } from './component/list-empleados/list-empleados.component';

const routes: Routes = [
  {path:'', redirectTo:'list-empleados', pathMatch:'full'},
  {path: 'list-empleados', component: ListEmpleadosComponent },
  {path:'create-empleados', component: CreateEmpleadosComponent },
  {path:'editEmpleados/:id', component: CreateEmpleadosComponent },
  {path:'**', redirectTo:'list-empleados', pathMatch:'full'} /* si se pone mal la pagina redirecciona siempre a lis-empleados */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
