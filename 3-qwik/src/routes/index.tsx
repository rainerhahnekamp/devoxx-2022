import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Episode } from "~/model/episode";
import Episodes from "~/components/episodes";
import { parseEpisode } from "~/logic/parse-episode";

export default component$(() => {
  const episodesResource = useResource$<Episode[]>(async () => {
    const response = await fetch("http://localhost:8080/episode").then((res) =>
      res.json()
    );
    return Promise.all(response.map(parseEpisode));
  });

  return (
    <>
      <Resource
        value={episodesResource}
        onPending={() => <p>"lade..."</p>}
        onResolved={(episodes) => <Episodes episodes={episodes}></Episodes>}
      ></Resource>
    </>
  );
});
