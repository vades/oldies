import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription,timer } from 'rxjs';
import { NgkAlertifyService } from '@ngk/components/alertify/ngk-alertify.service';
import { DataService } from './data.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class SynthesisService {
  private subject = new Subject<any>();
  everySecond: Observable<number> = timer(0, 5000);

  private subscription: Subscription;

  private synthesis = window.speechSynthesis;
  private utterance: any = {
    speaking: false,
    pending: false,
    paused: false,
    onstart: false,
    onresume: false,
    onerror: false,
    onend: false,
  };

  constructor(
    private ngkAlertifyService: NgkAlertifyService,
    private dataService: DataService
  ) {
    this.subscription = this.everySecond.subscribe((seconds) => { 
      if(this.utterance.speaking){
        this.synthesis.pause();
        this.synthesis.resume();
        console.log('pause, resume');
      }
      console.log(seconds * 5);
      
    })
   }

  hasBrowserSupport() {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  set() {
    setTimeout(() => {
      this.dataService.set(this.utterance);
    }, 500);

  }

  get(): Observable<any> {
    return this.subject.asObservable();
  }

  play(cfg: any) {
    let text = this.sanitizeText(cfg.text);
    let utter = new SpeechSynthesisUtterance(text);
    utter.voice = this.getVoiceByName(cfg.voice);
    utter.pitch = cfg.pitch;
    utter.rate = cfg.rate;
    utter.volume = cfg.volume;

    if (this.utterance.paused) {
      this.synthesis.resume();
      this.onResume();
      this.set();
    } else {
      this.synthesis.speak(utter);

    }
    //this.utterance.speaking = true;

    utter.onstart = (event): any => {
      this.onStart();
      this.set();
      console.log('We have started uttering this speech: ' + event.utterance.text);
    }

    utter.onpause = (event): any => {
      console.log('Speech paused after ' + event.elapsedTime + ' milliseconds.');
     
    }

    utter.onresume = (event): any => {
      console.log('Speech resumed after ' + event.elapsedTime + ' milliseconds.');
    }

    utter.onerror = (event): any => {
      this.ngkAlertifyService.show('An error has occurred with the speech synthesis.','is-danger');
      console.log('An error has occurred with the speech synthesis: ' + event.error);
    }

    utter.onend = (event): any => {
      this.reset();
      this.set();
      console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' milliseconds.');
    }

  }

  pause() {
    this.synthesis.pause();
    this.onPause();
    this.set();
  }

  cancel() {
    this.synthesis.cancel();
    this.reset();
    this.set();
  }

  onStart() {
    this.utterance.speaking = true;
    this.utterance.onstart = true;
  }

  onPause() {
    this.utterance.onstart = false;
    this.utterance.onresume = false;
    this.utterance.paused = true;
    this.utterance.speaking = false;
  }

  onResume() {
    this.utterance.onresume = true;
    this.utterance.paused = false;
    this.utterance.speaking = true;
  }

  /* onEnd() {
    this.utterance.onend = true;
    this.utterance.onstart = false;
    this.utterance.onresume = false;
    this.utterance.paused = false;
    this.utterance.speaking = false;
  } */

  reset() {
    this.utterance = {
      speaking: false,
      pending: false,
      paused: false,
      onstart: false,
      onresume: false,
      onerror: false,
      onend: false,
    };
  }

  getVoices() {
    return this.synthesis.getVoices();
  }

  fetchVoice(key: string, value: any) {
    const voices = this.synthesis.getVoices();
    let voice: any;
    for (let i in voices) {
      let voice = voices[i];
      if(voice[key] && voice[key] == value){
        return voice;
      }
     
    }
   
  }

  getVoiceByName(name: string) {
    const voices = this.synthesis.getVoices();
    let voice: any;
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].voiceURI == name) {
        voice = voices[i];
      }
    }
    return voice;
  }

  sanitizeText(text: string) {
    return  text.replace(/<[^>]*>/g, '');
  }

  clear() {
    this.subject.next();
  }

}
