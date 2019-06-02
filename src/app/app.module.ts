/*
Imports
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

// pages
import { AppComponent } from './app.component';
import { PLoginComponent } from './pages/p-login/p-login.component';
import { PRegisterComponent } from './pages/p-register/p-register.component';
import { PPasswordForgottenComponent } from './pages/p-password-forgotten/p-password-forgotten.component';
import { PIntroductionComponent } from './pages/p-introduction/p-introduction.component';
import { PObjectComponent } from './pages/p-object/p-object.component';
import { PSetComponent } from './pages/p-set/p-set.component';
import { PSetIntroductionComponent } from './pages/p-set-introduction/p-set-introduction.component';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { PTrainingsComponent } from './pages/p-trainings/p-trainings.component';
import { PBadgesComponent } from './pages/p-badges/p-badges.component';
import { PDataComponent } from './pages/p-data/p-data.component';
import { PProfileComponent } from './pages/p-profile/p-profile.component';
import { PSingleTrainingComponent } from './pages/p-single-training/p-single-training.component';
import { PRecordTrainingComponent } from './pages/p-record-training/p-record-training.component';

// composant
import { CNavigationComponent } from './components/c-navigation/c-navigation.component';
import { CBoxTrainingComponent } from './components/c-box-training/c-box-training.component';
import { CSearchComponent } from './components/c-search/c-search.component';
import { CBoxBadgeComponent } from './components/c-box-badge/c-box-badge.component';
import { CBoxSpecComponent } from './components/c-box-spec/c-box-spec.component';
import { CFilterComponent } from './components/c-filter/c-filter.component';
import { CPopinComponent } from './components/c-popin/c-popin.component';

// router
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { CFavComponent } from './components/c-fav/c-fav.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/*
Définition
*/
@NgModule({
  declarations: [
    AppComponent,
    PLoginComponent,
    PRegisterComponent,
    PPasswordForgottenComponent,
    PIntroductionComponent,
    PObjectComponent,
    PSetComponent,
    PSetIntroductionComponent,
    PHomeComponent,
    PTrainingsComponent,
    PBadgesComponent,
    PDataComponent,
    PProfileComponent,
    CNavigationComponent,
    CBoxTrainingComponent,
    CSearchComponent,
    CBoxBadgeComponent,
    CFilterComponent,
    CPopinComponent,
    PSingleTrainingComponent,
    CBoxSpecComponent,
    PRecordTrainingComponent,
    CFavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/*
Export
*/
export class AppModule {
  constructor(
    private router: Router,
  ) {

    // // TODO : debug home + boucle
    // localStorage.removeItem('token')
    //
    // // vérifie si l'utilisateur est connecté
    // const isConnected = localStorage.getItem('token') !== null
    // if (!isConnected && this.router.url !== "/login") this.router.navigate(['/login']);
  }
}
