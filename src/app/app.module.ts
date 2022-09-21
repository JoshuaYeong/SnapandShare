import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnapComponent } from './components/snap.component';
import { ShareComponent } from './components/share.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraService } from './services/camera.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: SnapComponent },
  { path: 'share', component: ShareComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    SnapComponent, ShareComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes , { useHash: true}),
    WebcamModule, ReactiveFormsModule,
    MaterialModule, HttpClientModule,
  ],
  providers: [ CameraService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
