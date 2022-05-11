import { useEffect, useState } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};
let state = {
  count:0,
  color: color.yellow
}
export default function Counter() {
const countContext = createContext(null);

const reducer = (state, action) => {
  const colorSwitch = (count) => {
    if (count === 0) {
      return(color.yellow);
    } if (count > 0) {
      return(colors.green);
    } if (count < 0) {
      return(colors.red);
    }
  }
 switch (action.type) {
   case 'increase':
   return{
     count: state.count + 1,
     color: colorSwitch(state.count + 1),
   };
   case 'decrease':
     return {
       count: state.count - 1,
       color: colorSwitch(state.count - 1),
     };
     case 'reset':
       return { count: 0, color: color.yellow };
       default: 
       throw new Error('Unhandled Action Type');
 }
};

  return (
    <main className={styles.main}>
      <h1 style={{ color: currentColor }}>{count}</h1>
      <div>
        <button
          type="button"
          onClick={increment}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={decrement}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={reset}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
