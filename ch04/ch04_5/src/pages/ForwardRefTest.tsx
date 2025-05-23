import { useRef, useCallback, useEffect } from 'react';
import { Title } from '../components';
import { Input, Button } from '../theme/daisyui';

export default function ForwardRefTest() {
  const inputRef = useRef<HTMLInputElement>(null);

  const getValue = useCallback(
    () => alert(`input value: ${inputRef.current?.value}`),
    []
  );

  useEffect(() => inputRef.current?.focus(), []);

  return (
    <section className="mt-4">
      <Title>ForwardRefTest</Title>
      <div className="flex justify-center mt-4">
        <div className="flex flex-col w-1/3 p-2">
          <Input ref={inputRef} className="input-primary" />
          <Button onClick={getValue} className="mt-4 btn-primary">
            GET VALUE
          </Button>
        </div>
      </div>
    </section>
  );
}
