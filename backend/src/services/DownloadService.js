const path = require('path');

module.exports = {
    async execute(id, song) {
        return await this.Download(id, song).then();
    
      },

      Download: (id, song) => new Promise((resolve, reject) => {

        const readline = require('readline');
        const ytdl = require('ytdl-core')
        const ffmpeg = require('fluent-ffmpeg');
        const dirPath = path.join(__dirname, '../music');

        let stream = ytdl(id, {
        quality: 'highestaudio',
        });

        let start = Date.now();
        ffmpeg(stream)
        .audioBitrate(128)
        .save(`${dirPath}/${song.replace(/\./g,'').replace(/"/g,"")}.mp3`)   
        .on('progress', p => {
            readline.cursorTo(process.stdout, 0);
            process.stdout.write(`${p.targetSize}kb downloaded`);
        })
        .on('end', () => {
            console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`);
            resolve(`Download de ${song} concluído`)
        })
        .on(
           "error", (error) => reject("Ocorreu um erro durante o download, tente novamente")
        );
            
    })};
  
  
    
  
  
  
  
  
  