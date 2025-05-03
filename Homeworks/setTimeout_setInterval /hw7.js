class FileUploader {
    constructor(filename) {
      this.filename = filename
    }
  
    startUpload() {
      console.log("Start: ", this.filename)
      
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Upload:", this.filename)
          resolve()
        }, 2000)
      })
    }
  
    async notifyUser() {
      await this.startUpload()
      console.log("Upload complete!")
    }
  }

  const uploader = new FileUploader("hw7.js")
  uploader.notifyUser()
  