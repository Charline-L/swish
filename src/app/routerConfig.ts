/*
Imports
*/
import { Routes } from '@angular/router';

// Pages
import { PLoginComponent } from './pages/p-login/p-login.component';
import { PRegisterComponent } from './pages/p-register/p-register.component';
import { PPasswordForgottenComponent } from './pages/p-password-forgotten/p-password-forgotten.component';
import { PIntroductionComponent } from './pages/p-introduction/p-introduction.component';
import { PObjectComponent } from './pages/p-object/p-object.component';
import { PSetComponent } from './pages/p-set/p-set.component';
import { PSetIntroductionComponent } from './pages/p-set-introduction/p-set-introduction.component';
import { PHomeComponent } from './pages/p-home/p-home.component';
import { PTrainingsComponent } from './pages/p-trainings/p-trainings.component';
import { PDataComponent } from './pages/p-data/p-data.component';
import { PProfileComponent } from './pages/p-profile/p-profile.component';
import { PBadgesComponent } from './pages/p-badges/p-badges.component';
import { PSingleTrainingComponent } from './pages/p-single-training/p-single-training.component';
import { PRecordTrainingComponent } from './pages/p-record-training/p-record-training.component';

/*
Configuration
*/
export const appRoutes: Routes = [
  {
    path: 'login',
    component: PLoginComponent
  },
  {
    path: 'register',
    component: PRegisterComponent
  },
  {
    path: 'passwordForgotten',
    component: PPasswordForgottenComponent
  },
  {
    path: 'introduction',
    component: PIntroductionComponent
  },
  {
    path: 'object',
    component: PObjectComponent
  },
  {
    path: 'set-introduction',
    component: PSetIntroductionComponent
  },
  {
    path: 'set',
    component: PSetComponent
  },
  {
    path: 'home',
    component: PHomeComponent
  },
  {
    path: 'badges',
    component: PBadgesComponent
  },
  {
    path: 'trainings',
    component: PTrainingsComponent
  },
  {
    path: 'data',
    component: PDataComponent
  },
  {
    path: 'profile',
    component: PProfileComponent
  },
  {
    path: 'single-training',
    component: PSingleTrainingComponent
  },
  {
    path: 'record-training',
    component: PRecordTrainingComponent
  }
];
