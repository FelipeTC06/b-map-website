import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },

    // {
    //   path: 'landing-page',
    //   loadChildren: () => import('./pages/application/example-landing-page/tutorial.module')
    //     .then(mod => mod.TutorialModule)
    // },
];
