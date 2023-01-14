const { log } = require('console');
const WebSocket=require('ws')




const wss= new WebSocket.Server({port:8080})

wss.on('connection', (ws)=>{
    console.log("Hello, you are connected");
    ws.on('message', (data)=>{
        const reason = data.toString();
        ws.send(data)
        console.log("Hello, there is new message",reason);
    })

    ws.on('close', ()=>{
        console.log("client disconnected");
    })
})