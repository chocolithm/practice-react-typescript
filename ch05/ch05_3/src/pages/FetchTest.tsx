import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Title, Avatar } from '../components';
import { Button } from '../theme/daisyui';
import * as D from '../data';
import type { AppState } from '../store';
import * as F from '../store/fetchUser';

export default function FetchTest() {
  const dispatch = useDispatch();
  const {
    loading,
    errorMessage,
    fetchUser: user
  } = useSelector<AppState, AppState>(state => state);

  const getRemoteUser = useCallback(() => {
    dispatch<any>(F.getRemoteUser());
  }, [dispatch]);

  const changeName = useCallback(() => {
    dispatch<any>(F.changeNameByFetching());
  }, [dispatch]);

  const changeEmail = useCallback(
    () => dispatch<any>(F.changeEmail(D.randomEmail())),
    [dispatch]
  );
  const changePicture = useCallback(
    () => dispatch<any>(F.changePicture({ large: D.randomAvatar() })),
    [dispatch]
  );

  useEffect(getRemoteUser, [getRemoteUser]);

  return (
    <section className="mt-4">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn0-sm btn-primary" onClick={getRemoteUser}>
          GET REMOTE USER
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          CHANGE NAME
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
          CHANGE EMAIL
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          CHANGE PICTURE
        </Button>
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <Button className="btn-circle loading"></Button>
        </div>
      )}
      {errorMessage?.length > 0 && (
        <div className="p-4 mt-4 bg-red-200">
          <p className="text-3xl text-red-500 text-bold">{errorMessage}</p>
        </div>
      )}

      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  );
}
