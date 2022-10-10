import { Episode } from '../model/episode';
import Button from './Button';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const EditEpisodeWrapper = dynamic(() => import('./EpisodeEdit'), {
  ssr: false,
});

export type EpisodeActionArea = {
  episode: Episode;
};

export default function EpisodeActionArea({ episode }: EpisodeActionArea) {
  const [edit, setEdit] = useState(false);

  if (edit) {
    return (
      <div>
        <EditEpisodeWrapper
          content={episode.contentMd}
          cancel={() => setEdit(false)}
          save={() => void true}
        ></EditEpisodeWrapper>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center my-4 gap-2">
        <Button label="Full Episode" />
        <Button label="Comments" />
        <Button label="Edit" onClick={() => setEdit(!edit)} />
      </div>
    );
  }
}
