import { useReducer, createContext  } from 'react';
import styles from './Counter.css';

const colors = {
  yellow: 'rgb(236, 222, 153)',
  green: 'rgb(52, 211, 153)',
  red: 'rgb(239, 68, 68)',
};
let startState = {
  count:0,
  color: colors.yellow
}
export default function Counter() {
const countContext = createContext(null);

const reducer = (state, action) => {
  const colorSwitch = (count) => {
    if (count === 0) {
      return(colors.yellow);
    } else if (count > 0) {
      return(colors.green);
    } else {
      return(colors.red);
    }
  }
 switch (action.type) {
   case 'increment':
   return{
     count: state.count + 1,
     color: colorSwitch(state.count + 1),
   };
   case 'decrement':
     return {
       count: state.count - 1,
       color: colorSwitch(state.count - 1),
     };
     case 'reset':
       return { count: 0, color: colors.yellow };
       default: 
       throw new Error('Unhandled Action Type');
 }
};

const [state, dispatch] = useReducer(reducer, startState);
  return (
    <main className={styles.main}>
      <h1 style={{ color: state.color }}>{state.count}</h1>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: 'increment'})}
          aria-label="increment"
          style={{ backgroundColor: colors.green }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'decrement'})}
          aria-label="decrement"
          style={{ backgroundColor: colors.red }}
        >
          Decrement
        </button>
        <button
          type="button"
          aria-label="reset"
          onClick={() => dispatch({ type: 'reset'})}
          style={{ backgroundColor: colors.yellow }}
        >
          Reset
        </button>
      </div>
    </main>
  );
}
