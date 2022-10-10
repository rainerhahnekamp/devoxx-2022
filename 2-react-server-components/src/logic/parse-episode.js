import {z} from 'zod';
import marked from 'marked';

const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  content: z.string(),
  imageSrc: z.string(),
});

export function parseEpisode(obj) {
  const episode = episodeSchema.parse(obj);

  return Object.assign(episode, {
    imageSrc: `http://localhost:8080/${episode.imageSrc}`,
  });
}
