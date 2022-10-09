import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import Button from './Button';

export type EditEpisodeProps = {
  content: string;
  save: (content: string) => void;
  cancel: () => void;
};

export default function EditEpisode({
  content,
  save,
  cancel,
}: EditEpisodeProps) {
  const [value, setValue] = useState(content);
  return (
    <div className="mx-4">
      <textarea
        value={value}
        onChange={(v) => setValue(v.target.value)}
        className="w-full rounded px-4 h-64"
      ></textarea>
      <div className="flex justify-evenly my-4">
        <Button onClick={() => cancel()} label="Cancel"></Button>
        <Button label="Save" onClick={() => save(value)}></Button>
      </div>
    </div>
  );
}
