const { BASE_URL } = require("../constants/api-url");
const { Server: SocketIOServer } = require("socket.io");

let io = null;

function initializeSocket(server) {
  if (!io) {
    console.log("✅ Initializing Socket.IO...");
    io = new SocketIOServer(server, {
      path: "/api/cart_items",
      cors: {
        origin: BASE_URL, // Update this to match your frontend URL
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", (socket) => {
      console.log("🔗 User connected:", socket.id);

      socket.on("disconnect", () => {
        console.log("❌ User disconnected:", socket.id);
      });
    });
  } else {
    console.log("⚡ Socket.IO is already running");
  }

  return io;
}

function getSocketInstance() {
  return io;
}

module.exports = { initializeSocket, getSocketInstance };
