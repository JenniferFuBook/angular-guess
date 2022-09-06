
import { NgModule } from '@angular/core';
import { OneComponent } from './one.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OneComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OneComponent
      }
    ])
  ]
})

export class OneModule {}