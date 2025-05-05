let url = "https://jsonplaceholder.typicode.com/posts"

function foo(url){
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data[0].title)
  })
}

foo(url)