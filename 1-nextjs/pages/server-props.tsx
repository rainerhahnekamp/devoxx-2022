import { parseEpisode } from '../logic/parse-episode';
import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from 'next';
import { Episodes } from '../components/Episodes';

export const getServerSideProps: GetServerSideProps = async () => {
  const episodes = await fetch('http://localhost:8080/episode')
    .then((res) => res.json())
    .then((episodes) => Promise.all(episodes.map(parseEpisode)));

  return { props: { episodes } };
};
export default function Page({
  episodes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Episodes episodes={episodes}></Episodes>;
}
