function simulateDownload(filename, callback){
    setTimeout(() =>{
        callback("Download complete: " + filename)
    },2000)
}

simulateDownload("file1.txt", function (message) {
    console.log(message);
  })  