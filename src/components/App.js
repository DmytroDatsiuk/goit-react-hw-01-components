import user from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import transactions from 'path/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistics';
import { FriendList } from 'components/Friends/FriendList';
import { TransactionList } from 'components/Transaction/TransactionList';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionList items={transactions} />
    </Layout>
  );
};
