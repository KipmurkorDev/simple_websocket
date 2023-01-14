const { log } = require('console');
const WebSocket=require('ws')




const wss= new WebSocket.Server({port:8080})

wss.on('connection', (ws)=>{
    console.log("Hello, you are connected");
    ws.on('message', (data)=>{
        console.log("Hello, there is new message");
    })

    ws.on('close', ()=>{
        console.log("client disconnected");
    })
})