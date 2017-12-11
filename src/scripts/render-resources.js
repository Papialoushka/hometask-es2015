import NewsResource from './news-resources-link';
import './../styles/screen.css'
import './../styles/resources.css';

export default function renderResources() {
  const apiKey = '59c232ebefc84b5d9c489f4222161cf2',
        apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`,
        getResponse = (response) => response.json(),
        getResources = (resources) => {
          resources.sources.forEach(source => {
            const newResourceItem = new NewsResource(source);

            newResourceItem.createList('news-resource', 'newsResources');
          });
          return resources.sources.id;
        };

  const request = async() => {
    const response = await fetch(apiUrl);
    const json = await getResponse(response);
    const parseJson = await getResources(json);
  };

  request();
}
