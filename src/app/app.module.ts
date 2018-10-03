import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing } from './app-routing.module';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SemanticDropdownComponent } from './components/semantic-dropdown/semantic-dropdown.component';
import { ToastrModule, QueueComponent } from 'pb-ngx-toast';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AlertComponent } from './directives';
import { DashboardComponent } from './components/dashboard';
import { AuthGuard } from './guards';
import { LoginComponent } from './components/login';
import { RegisterComponent } from './components/register';
import { AlertService, AuthenticationService, UserService } from './services';

// used to create fake backend
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './helpers';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SemanticDropdownComponent,
        DashboardComponent,
        LoginComponent,
        AlertComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        // AppRoutingModule,
        routing,
        BsDropdownModule.forRoot(),
        ToastrModule
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
