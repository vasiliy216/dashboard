import { Server } from 'socket.io'

export default (http) => {

    const io = new Server(http);

    io.on("connect", function(socket) {
        
    });
    
    return io;
} 