import {Router, RouterModule, Routes} from '@angular/router'
import { CadastroComponent } from './cadastro/cadastro.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component'

const appRoutes : Routes = [
  {path: '',component : PaginaInicialComponent},
  {path: 'enviar',component: CadastroComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);
