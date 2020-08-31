import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgkTtsSynthesisService {

  synthesis = window.speechSynthesis;
  voices: any = [];
  constructor() { }

  hasBrowserSupport(){
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }

  fetchVoices() {
    const voiceObj = this.synthesis.getVoices();
    for (let i in voiceObj) {
      this.voices[i] = {
        default: voiceObj[i]['default'],
        lang: voiceObj[i]['lang'],
        localService: voiceObj[i]['localService'],
        name: voiceObj[i]['name'],
        voiceURI: voiceObj[i]['voiceURI'],
      };
    }
    return this.voices;
  }

  fetchVoice(key: string, value: any) {
    for (let i in this.voices) {
      let voice = this.voices[i];
      if(voice[key] && voice[key] == value){
        return voice;
      }
     
    }
   
  }

  getVoiceByName(name: string) {
    const voices = this.synthesis.getVoices();
    let voice: any;
    for(let i = 0; i < voices.length ; i++) {
      if(voices[i].voiceURI == name) {
       voice = voices[i];
      }
    }
   return voice;
  }
}
