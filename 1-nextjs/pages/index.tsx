import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <h1>Welcome to ng-news</h1>
      <ul>
        <li>
          <Link href="native">Episodes loaded natively</Link>
        </li>
        <li>
          <Link href="server-props">Episodes loaded via Server Props</Link>
        </li>
        <li>
          <Link href="server-component">
            Episodes via React Server Component
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
