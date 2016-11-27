import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTaskComponent }   from './pages/mytask/mytask.component';
import { CashEntryComponent } from './pages/cashentry/cashentry.component';
import { FxaComponent } from './pages/fxa/fxa.component';
import { TradeConfirmsComponent } from './pages/tradeconfirms/tradeconfirms.component';

const routes: Routes = [
  { path: '', redirectTo: '/mytask', pathMatch: 'full' },
  { path: 'mytask',  component: MyTaskComponent },
  { path: 'cashentry',  component: CashEntryComponent },
  { path: 'fxa',  component: FxaComponent },
  { path: 'tradeconfirms',  component: TradeConfirmsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
