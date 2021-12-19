import { Server } from 'socket.io'

export default (http) => {

    const io = new Server(http);

    io.on("connect", function(socket) {
        console.log("Connect is successful")
        io.emit('message', "Connect is successful")
    });
    
    return io;
} 