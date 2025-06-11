const axios = require('axios')
const { response } = require('express')
const Pool = require('pg')

const apiUrl = "http://0.0.0.0:8080"

axios.get(apiUrl + "/l1")
  .then(response => {
    console.log('GET L1 Response:', response.data)
    const { data, degree } = response.data
    function minus(str){
        let result = ''
        for(let i = 0; i <str.length; ++i){
            let code = str.charCodeAt(i)
            result += String.fromCharCode(code - degree)
        }
        return result
    }
    const res = minus(data)
    console.log("result L1", res)

    axios.get(apiUrl + "/l2", {data:{
        data:res,
        degree:degree
  },
    headers:{
        'Content-Type': 'application/json'
    }


})
    .then(response => {
        console.log('GET L2 Response:', response.data)

        let final = ''
        if(response.data === "base64"){
            const basebuffer = Buffer.from(response.data, 'base64');
            const basedecoded = basebuffer.toString('utf-8');
            final = basedecoded
            console.log("DECODED", basedecoded)
        }else if(response.data === "hex"){
            const hexdecoded = Buffer.from(response.data, 'hex').toString('utf8');
            final = hexdecoded
            console.log('DECODED', hexdecoded)
        }else{
            function reverseString(str) {
                return str.split('').reverse().join('');
              }
              let reversestr = reverseString(response.data)
              final = reversestr
              console.log("DECODED", reversestr)
        }
//     axios.get(apiUrl + "/l3", {data:{
//         data: final
//   },
//         headers:{
//             'Content-Type': 'application/json'
//       }
// })
//   .then(response =>{
//     console.log("Final", response)
//   })

  })
})
  .catch(error => {
    console.error('GET Error:', error)
  })