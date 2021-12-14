import io from 'socket.io-client'

const socket = io(window.location.origin.replace("3003", "3000"))

export default socket 