import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeFilhoComponent } from './iframe-filho/iframe-filho.component';
import { IframeComponent } from './iframe.component';
import { PRIMENG_IMPORTS } from 'src/app/primeNg-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaiIframeComponent } from './pai-iframe/pai-iframe.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from 'src/app/components/components.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    IframeComponent,
    IframeFilhoComponent,
    PaiIframeComponent],
  imports: [
    CommonModule,
    RouterModule,
    
    ...PRIMENG_IMPORTS,
  ],
  exports: [
    IframeComponent,
    PaiIframeComponent,
    IframeFilhoComponent,
  ]
})
export class IframeModule { }
