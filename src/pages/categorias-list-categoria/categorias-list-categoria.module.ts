import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoriasListCategoriaPage } from './categorias-list-categoria';

@NgModule({
  declarations: [
    CategoriasListCategoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoriasListCategoriaPage),
  ],
})
export class CategoriasListCategoriaPageModule {}
