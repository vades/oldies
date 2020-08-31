import { Component, OnInit } from '@angular/core';
import { ttsConfig } from './tts.config';
import { SynthesisService } from './services/synthesis.service';
import { DataService } from './services/data.service';
import { cloneDeep, merge } from "lodash";
import { ChangeDetectorRef } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'tts',
    templateUrl: './tts.component.html',
    styles: []
})
export class TtsComponent implements OnInit {
    subscriptions: any = {};
    hasBrowserSupport: boolean = true;
    cfg = ttsConfig;
    synthesis: any = {};
    voices: any = [];
    utteranceDefaultSettings: any = {};

    accordionStep = 0;
    
    constructor(
        private synthesisService: SynthesisService,
        private dataService: DataService,
        private ref: ChangeDetectorRef,
        private snackBar: MatSnackBar
    ) {
        this.subscriptions.data = this.dataService.get().subscribe(synthesis => {
            this.synthesis = synthesis;
            this.ref.detectChanges();

        });
        
    }

    ngOnInit() {
        this.snackBar.open('dfdfdfdfdf','OK');
        this.utteranceDefaultSettings = cloneDeep(ttsConfig.utterance);
        this.hasBrowserSupport = this.synthesisService.hasBrowserSupport();
        setTimeout(() => {
            this.voices = this.synthesisService.getVoices();
        }, 1000);
    }

    doAction(action: string) {
        switch (action) {
            case 'play':
                this.synthesisService.play(this.cfg.utterance);
                break;
            case 'pause':
                this.synthesisService.pause();
                break;
            case 'cancel':
                this.synthesisService.cancel();
                break;
            case 'clear':
                this.cfg.utterance.text = '';
                this.synthesisService.cancel();
                break;
            case 'test':
                this.synthesisService.cancel();
                this.synthesisService.play(this.cfg.utterance);
                break;
            case 'reset':
                this.synthesisService.cancel();
                this.cfg.utterance = merge({}, this.utteranceDefaultSettings);
               break;
            default:
                break;
        }
    }

    setVoice() {
        const voice = this.synthesisService.fetchVoice('voiceURI', this.cfg.utterance.voice);
        if (voice) {
          this.cfg.utterance.lang = voice.lang;
          this.cfg.utterance.voice = voice.voiceURI;
        }
      }

      setAccordionStep(index: number) {
        this.accordionStep = index;
      }
    

    /**
    * On destroy
    */
    ngOnDestroy(): void {
        for (let i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
    }

}
