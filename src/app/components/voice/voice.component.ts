import {Component, OnInit} from '@angular/core';
import {VoiceRecogService} from "../../service/voice-recog.service";

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent implements OnInit{

  Status: string = 'Not Initialized';
  color: string = 'grey';

  constructor(protected  service: VoiceRecogService) {
this.service.init()

  }
  ngOnInit() {
  }

  onClick(start: boolean) {
    if (start) {
      this.service.start()
      this.Status = 'Started... :)';
      this.color = '#4096f4';
    } else if (!start) {
      this.service.stop()
      this.Status = 'Stopped... :(';
      this.color = '#ff5b84';
    }
  }

  resettranscript(reset :any ){
    if(reset){
      this.service.resettranscript()
      this.Status = "Reset... \\_('_')_/" ;
      this.color = '#f4c140';
    }else {
      console.log('Reset hase some Issues ')
    }
  }

}
