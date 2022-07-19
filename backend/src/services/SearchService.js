


module.exports = { async execute(videos) {

        function getSong(value) {
            const song = value.split("-").slice(1).join("-").replace("&amp;", "&")
            if (song == "" || song == null) {
                return value;
            } else {
                return song;
            }
        }
        function getArtist(value) {
            const artist = value.split("-").slice(0, -1).join("-").replace("&amp;", "&")
            if (artist == "" || artist == null) {
                return "Desconhecido";
            }
            else {
                return artist;
            }
        }

        
        const array = videos.map(data => ({
            id: data.id.videoId,
            title: data.title.replace("&amp;", "&"),
            song: getSong(data.title),
            artist: getArtist(data.title),
            duration: data.snippet.duration,
            thumbnails: `http://img.youtube.com/vi/${data.id.videoId}/1.jpg`
        }))
        return array;



    }
}

