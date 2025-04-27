let config ={}

Object.defineProperty(config, "SECRET_KEY",{
    "value": "xyz123"
})

config.SECRET_KEY = "qwerty"
console.log(config.SECRET_KEY)

delete config.SECRET_KEY
console.log(config.SECRET_KEY)

console.log(Object.keys(config))

for(let value in config){
    console.log(value)
}