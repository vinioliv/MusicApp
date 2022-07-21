

const yt = require('youtube-search-without-api-key');
const searchService = require("../services/SearchService");
const downloadService = require("../services/DownloadService");

module.exports = {
  async search(request, response) {
    const { q } = request.query;
    const videos = await yt.search(q.toString());
    const search = await searchService.execute(videos);
    return response.json(search)
 
  },

  async download(request, response){
    const {id, song} = request.body;
    const download = await downloadService.execute(id, song);
    return response.json(download);
  }
}

