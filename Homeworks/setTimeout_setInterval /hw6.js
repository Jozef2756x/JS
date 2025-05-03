let url = 'https://jsonplaceholder.typicode.com/posts'

class DataPipeline {
  fetchData(url) {
    return fetch(url)
      .then(response => response.json())
  }

  filterData(data) {
    return data.filter(item => item.userId <= 5)
  }

  logData(data) {
    console.log("Data:", data)
  }
}

let pipeline = new DataPipeline()

pipeline.fetchData(url)
    .then(data => pipeline.filterData(data))
    .then(filtered => pipeline.logData(filtered))