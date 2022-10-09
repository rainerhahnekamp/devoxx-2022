import Button from './Button';

export default function EpisodeCard({episode}) {
  return (
    <div
      className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
      <div className="h-64 w-auto">
        <img
          className="inset-0 w-full object-cover object-center"
          src={episode.imageSrc}
          alt={episode.name}
        />
      </div>

      <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
        <div
          className="markdown-body line-clamp-5"
          dangerouslySetInnerHTML={{__html: episode.content}}></div>

        <div className="flex justify-evenly">
          <Button label="More Info" />
          <Button label="Edit" />
        </div>
      </div>
    </div>
  );
}
