import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { TourListComponent } from './pages/tour-list/tour-list.component';
import { EventListComponent } from './pages/event-list/event-list.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', redirectTo:'start', pathMatch: 'full' },
    { path: 'start', component: OverviewComponent },
    { path: 'tour', component: TourListComponent },
    { path: 'event', component: EventListComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: '**', redirectTo:'start', pathMatch: 'full'  },
];
