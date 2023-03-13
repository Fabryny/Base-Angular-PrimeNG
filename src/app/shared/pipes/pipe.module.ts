import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SituacaoPipe } from './situacaoPipe';

@NgModule({
  declarations: [
    SituacaoPipe,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SituacaoPipe,
  ],
  exports: [
    SituacaoPipe,
  ]
})
export class PipeModule { }
