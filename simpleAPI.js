const http = require("http");

const userData = [
  {
    name: "Rahul",
    age: 24,
    city: "Delhi",
    email: "rahul@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Atul",
    age: 12,
    city: "Noida",
    email: "atul@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Rohit",
    age: 22,
    city: "Gzb",
    email: "rohit@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Sumit",
    age: 26,
    city: "Faridabad",
    email: "sumitgmail.com",
    photo: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Ankit",
    age: 28,
    city: "Delhi",
    email: "ankit@@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/39.jpg",
  },
  {
    name: "Shubham",
    age: 29,
    city: "Noida",
    email: "shubham@gmail.com",
    photo: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

const server = http.createServer((req, res) => {
  //   res.write("<h1>This is simple API response</h1>");
  //   res.end("Response from simple API completed");
  // --- Add CORS Headers ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }
  // -------------------------

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(userData));
});

server.listen(4800);
