import { useEffect, useState } from 'react';
import { Episode } from '../model/episode';
import { parseEpisode } from '../logic/parse-episode';
import { Episodes } from '../components/Episodes';

export default function Native() {
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/episode')
            .then((res) => res.json())
            .then((episodes) => Promise.all(episodes.map(parseEpisode)))
            .then(setEpisodes);
    }, []);
    return <Episodes episodes={episodes}></Episodes>;
}
