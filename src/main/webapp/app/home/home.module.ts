import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyZtl3SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MyZtl3SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class MyZtl3HomeModule {}
