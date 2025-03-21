import type { FC, PropsWithChildren } from 'react';

export type PProps = {};

const P: FC<PropsWithChildren> = props => {
  return <p {...props} />;
};

export default P;
