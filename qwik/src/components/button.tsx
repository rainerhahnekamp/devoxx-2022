import { component$, PropFunction, Slot } from "@builder.io/qwik";

export type ButtonProps = {
  onClick$?: PropFunction<() => void>;
};

export const Button = component$((props: ButtonProps) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick$={async () => {
        if (props.onClick$) {
          await props.onClick$();
        }
      }}
    >
      <Slot />
    </button>
  );
});
