const socket = io()

// get data from server
socket.on('back', (data) => {
    console.log(data.message);
})

// send data to server
socket.emit('front', {
    message: 'salaaaaam'
})