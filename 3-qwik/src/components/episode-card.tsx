import { Episode } from "../model/episode";
import {
  component$,
  createContext,
  useContextProvider,
} from "@builder.io/qwik";
import { EpisodeActionArea } from "~/components/episode-action-area";

export type EpisodeProps = {
  episode: Episode;
};

// https://ordinarycoders.com/blog/article/17-tailwindcss-cards
export const EpisodeCard = component$(({ episode }: EpisodeProps) => {
  const context = createContext("episode");
  return (
    <div className="bg-white rounded-lg shadow-xl mt-4 w-100 mx-2">
      <div className="flex flex-col md:flex-row overflow-hidden">
        <div className="h-64 w-auto">
          <img
            className="inset-0 w-full object-cover object-center"
            src={episode.imageSrc}
          />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between h-64">
          {episode.content}
        </div>
      </div>
      <EpisodeActionArea episode={episode}></EpisodeActionArea>
    </div>
  );
});
