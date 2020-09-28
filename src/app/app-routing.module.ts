import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./core/authentication/authentication.module')
            .then(m => m.AuthenticationModule),
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    // todo add error
    {
        path: '**',
        redirectTo: 'auth' 
    },
];

const config: ExtraOptions = {
    useHash: false,
  };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
