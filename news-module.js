(function () {
  import {NewsResourcesLink} from 'news-resources-link.js';

  let newResource = new NewsResourcesLink('http://abcnews.go.com', 'ABC News', 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.', 'abc-news');
  newResource.createLink();
})();