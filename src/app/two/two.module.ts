
import { NgModule } from '@angular/core';
import { TwoComponent } from './two.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TwoComponent
      }
    ])
  ]
})

export class TwoModule {}