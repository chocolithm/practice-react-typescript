import { useMemo, useCallback } from 'react';
import { Title } from '../components';
import { Button } from '../theme/daisyui';
import * as D from '../data';

export default function HighOrderCallback() {
  const onClick = useCallback((name: string) => () => alert(`${name} clicked`), []);

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn-[ro,ary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  );

  return (
    <div className="mt-4">
      <Title>HighOrderCallback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  );
}
