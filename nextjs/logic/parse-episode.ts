import { z } from 'zod';
import { Episode } from '../model/episode';
import { remark } from 'remark';
import html from 'remark-html';

const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  content: z.string(),
  imageSrc: z.string(),
});

export async function parseEpisode(obj: unknown): Promise<Episode> {
  const episode = episodeSchema.parse(obj);
  const processedContent = await remark().use(html).process(episode.content);
  const content = processedContent.toString();
  return {
    ...episode,
    imageSrc: `http://localhost:8080/${episode.imageSrc}`,
    content,
    contentMd: episode.content,
  };
}
