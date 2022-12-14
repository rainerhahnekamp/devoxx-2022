import { Episode } from '../model/episode';
import EpisodeActionArea from './EpisodeActionArea';

export type EpisodeProps = {
  episode: Episode;
};

// https://ordinarycoders.com/blog/article/17-tailwindcss-cards
export function EpisodeCard({ episode }: EpisodeProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl mt-4 w-100 mx-2">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="h-64 w-auto">
          <img
            className="inset-0 w-full object-cover object-center"
            src={episode.imageSrc}
          />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
          <div
            className="line-clamp-5 markdown-body"
            dangerouslySetInnerHTML={{ __html: episode.content }}
          ></div>
        </div>
      </div>
      <EpisodeActionArea episode={episode}></EpisodeActionArea>
    </div>
  );
}
