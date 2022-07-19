

const yt = require('youtube-search-without-api-key');
const searchService = require("../services/SearchService");

module.exports = {
  async search(request, response) {

    const { q } = request.query;

    const videos = await yt.search(q.toString());
  
    const search = await searchService.execute(videos);

    return response.json(search)
 
  }
}

