import NewsResource from './news-resources-link';
import './../styles/screen.css'
import './../styles/resources.css';

export default function renderResources() {
  const apiKey = '59c232ebefc84b5d9c489f4222161cf2';
  const apiUrl = `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
  const getResponse = (response) => response.json();
  const getResources = (resources) => {
          resources.sources.forEach(source => {
            const newResourceItem = new NewsResource(source);

            newResourceItem.createListItem('news-resource', 'newsResources');
          });
          return resources.sources.id;
        };

  const request = async() => {
    const response = await fetch(apiUrl);
    const json = await getResponse(response);
    getResources(json);
  };

  request();
}