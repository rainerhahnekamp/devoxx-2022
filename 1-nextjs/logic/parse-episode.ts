import { z } from 'zod';
import { Episode } from '../model/episode';

const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  content: z.string(),
  imageSrc: z.string(),
});

export async function parseEpisode(obj: unknown): Promise<Episode> {
  const episode = episodeSchema.parse(obj)
  return {
    ...episode,
    imageSrc: `http://localhost:8080/${episode.imageSrc}`,
    content: episode.content,
    contentMd: episode.content,
  };
}
