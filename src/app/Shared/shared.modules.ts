import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';  
import {SpinnerComponent} from './spinner/spinner.component';
import { FiledErrorDisplayComponent } from 'app/Shared/error/error-display.component.component';

@NgModule({        
    imports:      [CommonModule],
    declarations: [SpinnerComponent,
      FiledErrorDisplayComponent],
    exports:      [SpinnerComponent,FiledErrorDisplayComponent],
    providers:    []
    
  })
export class SharedModule {
  
}