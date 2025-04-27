let userIDs = ["u1", "u2", "u3"]

let users = {
    "u1": {score: 0},
    "u2": {score: 0},
    "u3": {score: 0}
}

users["u2"].score = 10
let newld = "u4"
users[newld] = {score: 0}

console.log(users)