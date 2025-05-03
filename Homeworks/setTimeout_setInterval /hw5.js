class UserFetcher {
    constructor(baseUrl) {
      this.baseUrl = baseUrl
    }
  
    async getUser(userId) {
      const response = await fetch(`${this.baseUrl}/users/${userId}`)
      const user = await response.json()
      return user
    }
  
    async printUserName(userId) {
      const user = await this.getUser(userId)
      console.log("name is " + user.name)
    }
  }
  
  let person = new UserFetcher("https://jsonplaceholder.typicode.com")
  person.printUserName(2)