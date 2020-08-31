import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TtsRoutingModule } from './tts-routing.module';
import { TtsComponent } from './tts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule, MatButtonModule, MatExpansionModule, MatSelectModule, MatSliderModule} from '@angular/material';


@NgModule({
  declarations: [TtsComponent],
  imports: [
    CommonModule,
    TtsRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatSelectModule,
    MatSliderModule
  ]
})
export class TtsModule { }
