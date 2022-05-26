const express = require("express");
const UserRouter = require("./routers/UserRouter");
const equipmentRouter = require("./routers/equipmentRouter");
const addequipmentRouter = require("./routers/addequipmentRouter");
const chatRouter = require("./routers/chatRouter");
const sellerRouter = require("./routers/sellerRouter");
const expertRouter = require("./routers/expertRouter");
const cors = require("cors");
// const ProductRouter = require("./routers/ProductRouter")

const app = express();
const port = 5000;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"],
    },
});
const connectedExperts = {};

io.on("connection", (socket) => {
    console.log("client connected ");
    socket.on("addexpert", (id) => {
        connectedExperts[id] = socket.id;
        console.log(connectedExperts);
    });

    socket.on("checkexpert", (id) => {
        socket.emit("checkexpertfromserver", {
            status: "online",
            socketId: connectedExperts[id],
        });
    });

    socket.on("sendstudent", (data) => {
        // console.log(data);
        data.sent = false;
        socket.broadcast.emit("recmsg", data);
    });
    socket.on("sendmsg", (data) => {
        console.log(data);
        data.sent = false;
        socket.to(data.socketId).emit("recmsg", data);
    });
});

// for reading json data
app.use(express.json());

// for allowing frontend
app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/user", UserRouter);
app.use("/equip", addequipmentRouter);
// app.use("/product" , ProductRouter);
app.use("/chat", chatRouter);

app.use("/equipment", equipmentRouter);

app.use("/seller", sellerRouter);

app.use("/expert", expertRouter);
app.get("/", (req, res) => {
    res.send("you have got a response");
});

app.get("/home", (req, res) => {
    res.send("you have reached home");
});

app.get("*", (req, res) => {
    res.send("404");
});
httpServer.listen(port, () => {
    console.log("server started on 5000");
});