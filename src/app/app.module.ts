import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './shared/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpInterceptorProviders } from './core/interceptors';
import { SharedModule } from './shared/shared.module';
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { NotFoundComponent } from './feature/not-found/not-found.component';
import { AuthModule } from './feature/auth/auth.module';
import { DeletedComponent } from './feature/details/view-notes/deleted/deleted.component';
import { UpdateViewComponent } from './feature/details/view-notes/update-view/update-view.component';
import { ViewNotesComponent } from './feature/details/view-notes/view-notes.component';
import { DeleteComponent } from './feature/details/delete/delete.component';
import { CreateNodeComponent } from './feature/details/create-node/create-node.component';
import { DetailsComponent } from './feature/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    AboutComponent,
    CreateNodeComponent,
    DeleteComponent,
    ViewNotesComponent,
    UpdateViewComponent,
    DeletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
   AuthModule,
    HttpClientModule,
    SharedModule,
    LoaderComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
