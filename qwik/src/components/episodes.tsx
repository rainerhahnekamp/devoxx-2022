import { component$ } from "@builder.io/qwik";
import { Episode } from "~/model/episode";
import { EpisodeCard } from "~/components/episode-card";

export type EpisodesProps = {
  episodes: Episode[];
};

export default component$(({ episodes }: EpisodesProps) => {
  return (
    <div className="pt-6 pb-12 bg-gray-300">
      <div id="card" className="">
        <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">
          Recent Episodes
        </h2>
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          {episodes.map((episode) => (
            <EpisodeCard episode={episode}></EpisodeCard>
          ))}
        </div>
      </div>
    </div>
  );
});
