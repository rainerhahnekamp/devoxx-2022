import { component$, PropFunction } from "@builder.io/qwik";
import { Button } from "~/components/button";

export type EditEpisodeProps = {
  content: string;
  save$: PropFunction<(content: string) => void>;
  cancel$: PropFunction<() => void>;
};

export const EditEpisode = component$((props: EditEpisodeProps) => {
  return (
    <div className="mx-4">
      <textarea
        value={props.content}
        className="w-full rounded px-4 h-64"
      ></textarea>
      <div className="flex justify-evenly my-4">
        <Button
          onClick$={async () => {
            if (props.cancel$) {
              await props.cancel$();
            }
          }}
        >
          Cancel
        </Button>
        <Button
          onClick$={async () => {
            if (props.save$) {
              await props.save$(props.content);
            }
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
});
