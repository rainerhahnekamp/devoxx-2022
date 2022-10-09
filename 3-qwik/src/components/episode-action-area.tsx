import { Episode } from "../model/episode";
import { component$, useStore } from "@builder.io/qwik";
import { EditEpisode } from "~/components/episode-edit";
import { Button } from "~/components/button";

export type EpisodeActionArea = {
  episode: Episode;
};

export const EpisodeActionArea = component$(
  ({ episode }: EpisodeActionArea) => {
    const store = useStore({ edit: false });

    if (store.edit) {
      return (
        <div>
          <EditEpisode
            content={episode.contentMd}
            cancel$={() => {
              store.edit = false;
            }}
            save$={() => void true}
          ></EditEpisode>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center my-4 gap-2">
          <Button>Full Episode</Button>
          <Button>Comments</Button>
          <Button
            onClick$={() => {
              store.edit = true;
            }}
          >
            Edit
          </Button>
        </div>
      );
    }
  }
);
