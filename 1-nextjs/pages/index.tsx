import { useEffect, useState } from 'react';
import { Episode } from '../model/episode';
import { parseEpisode } from '../logic/parse-episode';
import { Episodes } from '../components/Episodes';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const episodes = await fetch('http://localhost:8080/episode')
    .then((res) => res.json())
    .then((episodes) => Promise.all(episodes.map(parseEpisode)));

  return { props: { episodes } };
};

export default function Native(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return <Episodes episodes={props.episodes}></Episodes>;
}
