let url = "https://jsonplaceholder.typicode.com/posts"

class DataPipeline {

    async fetchData(url){
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    filterData(data){
        let data1 = []
        for(let i of data){
            if(i.userId > 5){
                data1.push(i)
            }
        }
        return data1
    }

    logData(data1){
        console.log(data1)
    }
}

(async () => {
    let result = new DataPipeline()
    const data = await result.fetchData(url)
    const arr = result.filterData(data)
    result.logData(arr)
})()
