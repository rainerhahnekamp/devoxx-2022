import EpisodeCard from './EpisodeCard';

export function Episodes({episodes}) {
  return (
    <div className="pt-6 pb-12 bg-gray-300">
      <div id="card" className="">
        <h2 className="text-center font-serif  uppercase text-4xl xl:text-5xl">
          Recent Episodes
        </h2>
        <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
          {episodes.map((episode) => (
            <EpisodeCard episode={episode} key={episode.id}></EpisodeCard>
          ))}
        </div>
      </div>
    </div>
  );
}
