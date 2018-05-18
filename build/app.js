/***************socket.io**********************/


// const http = require('http').Server(app);

const io = require('socket.io')(server);

const http = require('http');

// var bodyParser = require('body-parser');

// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({ extended: true} ));

io.on('connection', (socket) => {

    socket.on('login', (userdata) => {              //监听登录
        socket.userdata = userdata;

        socket.broadcast.emit('user join', socket.userdata)
    })

    socket.on('disconnect', (reason) => {           //监听退出
        if (socket.userdata) {
            socket.broadcast.emit('user left', socket.userdata);
        }
    });

    socket.on('sendMsg', function (data) {          //监听消息
        socket.broadcast.emit('receiveMsg', data);
    });

});


/***************socket.io**********************/