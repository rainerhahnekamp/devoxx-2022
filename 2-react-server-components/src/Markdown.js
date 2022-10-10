import marked from 'marked';

export default function Markdown({markdown}) {
  console.log('running markdown');
  const processedContent = marked(markdown);
  const html = processedContent.toString();
  return (
    <div
      className="markdown-body line-clamp-5"
      dangerouslySetInnerHTML={{__html: html}}></div>
  );
}
