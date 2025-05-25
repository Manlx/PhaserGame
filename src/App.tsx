import { useEffect, useState } from 'react';
import createPhaserGame from '../src/game/main';
import { Player } from './game/classes/player';

const App: React.FC = () => {

  const [playerMovementSpeedMultiplier, SetPlayerMovementSpeedMultiplier] = useState(Player.MovementSpeedMultiplier)

  useEffect(() => {

    const game = createPhaserGame('phaser-container');

    return () => {

      game.destroy(true);

    };
    
  }, []);

  useEffect(()=>{Player.MovementSpeedMultiplier = playerMovementSpeedMultiplier},[playerMovementSpeedMultiplier])

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
          <button onMouseDownCapture={()=> SetPlayerMovementSpeedMultiplier(prev => Math.round((prev + 0.1)*10)/10 )}>+</button>
          <button onMouseDown={()=> SetPlayerMovementSpeedMultiplier(prev => Math.round((prev - 0.1)*10)/10)}>-</button>
        </div>

      </div>

      <div id='phaser-container'></div>
      
    </div>

  )
}

export default App;