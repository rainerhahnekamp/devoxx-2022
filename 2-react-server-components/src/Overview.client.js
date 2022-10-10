import {useEffect, useState} from 'react';
import {Episodes} from './Episodes';
import {parseEpisode} from './logic/parse-episode';

export default function OverviewClient() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    console.log('fetch data');
    fetch('http://localhost:8080/episode')
      .then((res) => res.json())
      .then((episodes) => episodes.map(parseEpisode))
      .then(setEpisodes);
  }, []);

  return <Episodes episodes={episodes}></Episodes>;
}
