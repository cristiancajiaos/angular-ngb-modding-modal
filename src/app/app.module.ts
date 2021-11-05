import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponentComponent } from './shared/modal-component/modal-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ModalComponentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponentComponent]
})
export class AppModule { }
