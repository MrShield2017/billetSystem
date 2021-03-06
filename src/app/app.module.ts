import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MenuComponent } from './menu/menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForestillingerComponent } from './forestillinger/forestillinger.component';
import localeDk from '@angular/common/locales/da';
import { registerLocaleData } from '@angular/common';
import { BestillingComponent } from './bestilling/bestilling.component';
import { AppRoutingModule } from './/app-routing.module';
import { BestillingService } from './bestilling/bestilling.service';

registerLocaleData(localeDk, "da");
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    ForestillingerComponent,
    BestillingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [BestillingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
