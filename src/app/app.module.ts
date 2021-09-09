import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TempComponent } from './temp/temp.component';
import { MateriasComponent } from './materias/materias.component';
import { TimerService } from './timer.service';
import { DisciplinasService } from './disciplinas.service'

import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'temp', component: TempComponent },
      { path: 'materias', component: MateriasComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    TempComponent,
    MateriasComponent
  ],
  bootstrap: [AppComponent],
  providers: [TimerService, DisciplinasService]
})
export class AppModule {}
