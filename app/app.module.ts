import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyTaskComponent } from './pages/mytask/mytask.component';
import { CashEntryComponent } from './pages/cashentry/cashentry.component';
import { FxaComponent } from './pages/fxa/fxa.component';
import { TradeConfirmsComponent } from './pages/tradeconfirms/tradeconfirms.component';

@NgModule({
  imports:      [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MyTaskComponent,
    CashEntryComponent,
    FxaComponent,
    TradeConfirmsComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
