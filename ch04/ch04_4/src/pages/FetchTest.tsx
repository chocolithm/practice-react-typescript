import { useState, useCallback, useEffect } from 'react';
import { useToggle } from '../hooks';
import { Title, Avatar, Icon } from '../components';
import { Button } from '../theme/daisyui';
import * as D from '../data';

export default function FetchTest() {
  const [loading, toggleLoading] = useToggle();
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const getRandomUser = useCallback(() => {
    toggleLoading();
    D.fetchRandomUser().then(setRandomUser).catch(setError).finally(toggleLoading);
  }, [toggleLoading]);
  useEffect(getRandomUser, [getRandomUser]);

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn-primary" onClick={getRandomUser}>
          <Icon name="get_app" />
          <span>get random user</span>
        </Button>
      </div>
      {loading && (
        <div className="flex items-center justify-center">
          <Button className="btn-circle loading"></Button>
        </div>
      )}
      {error && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{error.message}</p>
        </div>
      )}
      {randomUser && (
        <div className="flex justify-center p-4 mt-4">
          <Avatar src={randomUser.picture.large} />
          <div className="ml-4">
            <p className="text-xl text-bold">
              {randomUser.name.title}. {randomUser.name.first} {randomUser.name.last}
            </p>
            <p className="italic text-gray-600">{randomUser?.email}</p>
          </div>
        </div>
      )}
    </section>
  );
}
