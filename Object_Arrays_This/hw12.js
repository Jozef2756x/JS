foo()

function foo(){
    console.log("Hello") //funktianeri jamanak texi e unenum amboxjakan hoisting
}

bar()

const bar = function(){
    console.log("world") // const-ov haytararvac funkcianery chen karox entarkvel hoistiongi dra hamar berum e referenceError-i
}