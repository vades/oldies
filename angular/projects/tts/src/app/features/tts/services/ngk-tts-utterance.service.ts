import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgkTtsUtteranceService {

  synthesis = window.speechSynthesis;
  constructor() { }

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

  utter(settings: any) {

    // Create an utterance object
    const utterance = new SpeechSynthesisUtterance(settings.text);
    utterance.voice = this.getVoiceByName(settings.voice);
    utterance.pitch = settings.pitch;
    utterance.rate = settings.rate;
    utterance.volume = settings.volume;
    //console.log( utterance)
    //console.log(this.getVoiceByName(settings.voice))
    // Speak the utterance
    this.synthesis.speak(utterance);
  }

  cancel() {
    this.synthesis.cancel();
  }

  pause() {
    this.synthesis.pause();
  }

  resume() {
    this.synthesis.resume();
  }
}
