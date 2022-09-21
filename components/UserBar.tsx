import { observer } from 'mobx-react';
import { Button, Dropdown } from 'react-bootstrap';
import Link from 'next/link';

import sessionStore from '../models/Session';

export const UserBar = observer(() => {
  const { user } = sessionStore;

  return !user ? (
    <Button href="/user/sign-in/">登入</Button>
  ) : (
    <>
      <Link href="/activity/create" passHref>
        <Button variant="success" className="my-2 my-md-0 me-3">
          创建黑客松活动
        </Button>
      </Link>
      <Dropdown className="my-2 my-md-0">
        <Dropdown.Toggle>{user.nickname}</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href={`/user/${user.id}`}>个人主页</Dropdown.Item>
          <Dropdown.Item onClick={sessionStore.signOut}>登出</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
});
