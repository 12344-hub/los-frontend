import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { AuthService } from './auth.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CardModule } from 'primeng/card';
import {PanelModule} from 'primeng/panel';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { IconService } from './service/iconservice';
import { CustomerService } from './service/customerservice';
import { PhotoService } from './service/photoservice';
import { VersionService } from './service/versionservice';
import { AppConfigService } from './service/appconfigservice';
import { ProductService } from './service/productservice';
import { httpInterceptorProviders } from './http-interceptors/index';

import { AppNewsComponent } from './app.news.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppConfigComponent } from './app.config.component';
import { AppFooterComponent } from './app.footer.component';
import { AppInputStyleSwitchModule } from './app.inputstyleswitch.component';
import { AppDemoActionsModule } from './app.demoactions.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppNewsComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppConfigComponent,
        AppFooterComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        ButtonModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        CardModule,
        PanelModule,
        AppInputStyleSwitchModule,
        AppDemoActionsModule,
        HttpClientXsrfModule.withOptions({
            cookieName: 'My-Xsrf-Cookie',
            headerName: 'My-Xsrf-Header',
        })

    ],
    providers: [
        AuthService,
        HttpErrorHandler,
        MessageService,
        { provide: RequestCache, useClass: RequestCacheWithMap },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        httpInterceptorProviders,
        CarService,CountryService,EventService,NodeService,IconService,CustomerService,PhotoService,VersionService,AppConfigService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
