import {useEffect, useState} from 'react';
import {Episodes} from './Episodes';
import {parseEpisode} from './logic/parse-episode';
import {fetch} from 'react-fetch';

export default function OverviewServer() {
  const response = fetch('http://localhost:8080/episode').json();
  const episodes = response.map(parseEpisode);
  console.log('fetch data');

  return <Episodes episodes={episodes}></Episodes>;
}
