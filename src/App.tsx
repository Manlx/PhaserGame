import { useEffect, useState } from 'react';
import createPhaserGame from '../src/game/main';
import { Player } from './game/classes/player';

const App: React.FC = () => {

  const [playerMovementSpeedMultiplier, SetPlayerMovementSpeedMultiplier] = useState(Player.MovementSpeedMultiplier);
  const [cameraZoom, setCameraZoom] = useState(1);
  const [game, setGame] = useState<Phaser.Game | undefined>();

  useEffect(() => {

    const gameTemp = createPhaserGame('phaser-container');
    setGame(gameTemp);

    return () => {

      gameTemp.destroy(true);

    };
    
  }, []);

  useEffect(()=>{Player.MovementSpeedMultiplier = playerMovementSpeedMultiplier;},[playerMovementSpeedMultiplier]);

  useEffect(()=>{
    game?.scene.getScene('Game')?.cameras?.cameras?.[0]?.setZoom(cameraZoom);

  },[cameraZoom, game]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
      }}>

      <div
        style={{
          padding: '1rem',
        }}>

        <div
          className='PlayerSettings'>
          <label htmlFor="">Player movement speed multiplier: {playerMovementSpeedMultiplier}</label>
          <div>
            <button onMouseDownCapture={()=> SetPlayerMovementSpeedMultiplier(prev => Math.round((prev + 0.1)*10)/10 )}>+</button>
            <button onMouseDown={()=> SetPlayerMovementSpeedMultiplier(prev => Math.round((prev - 0.1)*10)/10)}>-</button>
          </div>
        </div>

        <div
          className='PlayerSettings'>
          <label htmlFor="">Camera Zoom: {cameraZoom}</label>
          <div>
            <button onMouseDownCapture={()=> setCameraZoom(prev => Math.round((prev + 0.1)*10)/10 )}>+</button>
            <button onMouseDown={()=> setCameraZoom(prev => Math.round((prev - 0.1)*10)/10)}>-</button>
          </div>
        </div>

      </div>

      <div id='phaser-container'></div>
      
    </div>

  );
};

export default App;