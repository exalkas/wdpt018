import http from "http";

const array = [1, 2, 3];

const handleRequests = (req, res) => {
  console.log("🚀 ~ req method is :", req.method);
  console.log("🚀 ~ req method is :", req.url);

  if (req.method === "POST" && req.url === "/register") {
    console.log("RECEIVED A POST REQUEST");
    return res.end("USER CREATED");
  } else if (req.method === "POST" && req.url === "/login") {
    return res.end("USER LOGGED IN SUCCESSFULLY");
  }

  //   console.log("RESPONSE!!!", res);
  res.end(JSON.stringify(array));
};

const server = http.createServer(handleRequests);

server.listen(5000, () => console.log("Server is Up and running at port 5000"));
