const socket = io()

socket.on('back', (data) => {
    console.log(data.message);
})

socket.emit('front', {
    message: 'salaaaaam'
})