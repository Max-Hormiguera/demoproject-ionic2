import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ProjectsPage } from '../pages/page2/page2';
import { AuthService } from '../providers/auth-service';
import { ProjService } from '../providers/proj-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProjectsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProjectsPage
  ],
  providers: [AuthService, ProjService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
