import { Player } from "../game/classes/player";

export class PlayerDevTools {

  static PlayerSpeedUpButton: HTMLButtonElement;

  static PlayerSpeedDownButton: HTMLButtonElement;

  static Init(){

    const buttonLabel = document.createElement('label');

    buttonLabel.innerText = 'Player speed multiplier: ';

    document.getElementById('PlayerDevPanel')?.appendChild(buttonLabel);

    PlayerDevTools.PlayerSpeedDownButton = document.createElement('button');

    PlayerDevTools.PlayerSpeedDownButton.innerText = '-';

    PlayerDevTools.PlayerSpeedDownButton.addEventListener('click',()=>{

      Player.MovementSpeedMultiplier -= 0.1;
    });

    document.getElementById('PlayerDevPanel')?.appendChild(PlayerDevTools.PlayerSpeedDownButton);

    PlayerDevTools.PlayerSpeedUpButton = document.createElement('button');

    PlayerDevTools.PlayerSpeedUpButton.innerText = '+';

    PlayerDevTools.PlayerSpeedUpButton.addEventListener('click',()=>{

      Player.MovementSpeedMultiplier += 0.1;
    });

    document.getElementById('PlayerDevPanel')?.appendChild(PlayerDevTools.PlayerSpeedUpButton);
  }
}