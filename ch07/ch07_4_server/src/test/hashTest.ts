import * as U from '../utils';

const hashTest = async () => {
  const password = '1234';
  try {
    const hashed = await U.hashPasswordP(password);
    console.log('hashed', hashed);
    const same = await U.comparePasswordP(password, hashed);
    console.log('same', same);
    const same2 = await U.comparePasswordP('abcd', hashed);
    console.log('same2', same2);
  } catch (e) {
    if (e instanceof Error) console.log('error', e.message);
  }
};

hashTest();
