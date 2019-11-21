import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent} from './create/create.component';
import { ListComponent} from './list/list.component';
import { EditComponent} from './edit/edit.component';
import { DeleteComponent} from './delete/delete.component';

const routes: Routes = [
  {
    path: 'photoList/create',
    component: CreateComponent
  },
  {
    path: 'photoList',
    component: ListComponent
  },
  {
    path: 'photoList/edit/:id',
    component: EditComponent
  },
  {
    path: 'photoList/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
