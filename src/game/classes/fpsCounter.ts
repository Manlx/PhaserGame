import { Scene } from "phaser";

export class FSPCounter {

  static FPSCount = 0;

  static IntervalID = 0;

  static CalculatedFPS = 0;

  static Text: HTMLParagraphElement;

  static Init(Scene: Scene){

    FSPCounter.Text = document.getElementById('FPS') as HTMLParagraphElement;

    FSPCounter.IntervalID = setInterval(()=>{

      FSPCounter.CalculatedFPS = FSPCounter.FPSCount;

      FSPCounter.Text.innerText = `FPS: ${FSPCounter.FPSCount}`;

      FSPCounter.FPSCount = 0;

    },1000);

  }

  static UpdateLoop(){

    FSPCounter.FPSCount++;
  }
}