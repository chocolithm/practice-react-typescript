import { Title, Avatar } from '../components';
import * as D from '../data';
import { useOrCreate } from './UseOrCreate';

export default function UseOrCreateTest() {
  const headTexts = useOrCreate<string[]>('headTexts', () => [
    'NO.',
    'NAME',
    'JOB TITLE',
    'EMAIL ADDRESS'
  ]);
  const users = useOrCreate<D.IUser[]>('users', () =>
    D.makeArray(100).map(D.makeRandomUser)
  );
  const head = useOrCreate('head', () =>
    headTexts.map(text => <th key={text}>{text}</th>)
  );
  const body = useOrCreate('children', () =>
    users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5rem" />
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  );

  return (
    <section className="mt-4">
      <Title>UseOrCreateTest</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra table-compact">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </section>
  );
}
