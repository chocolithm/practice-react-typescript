import { useReducer } from 'react';
import type { AppState } from '../store';
import type { SetTodayAction } from '../store/actions';
import { Div, Title, Subtitle } from '../components';
import { useInterval } from '../hooks';
import { stat } from 'fs';

export default function UseReducerClock() {
  const [{ today }, dispatch] = useReducer(
    (state: AppState, action: SetTodayAction) => {
      switch (action.type) {
        case 'SetToday':
          {
            return { ...state, today: new Date() };
          }
          return state;
      }
    },
    {
      today: new Date()
    }
  );

  useInterval(() => dispatch({ type: 'SetToday', today: new Date() }));

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">useReducerClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  );
}
