const http = require("http");
const routes = require("./routes");
const PORT = process.env.PORT || 3000;

module.exports = () => {
  const server = http.createServer(async (req, res) => {
    let url = "";

    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/html, application/json",
    });

    if (req.url !== "/favicon.ico") {
      url = req.url;
    }

    if (url === "/") {
      try {
        const companies = await routes[url]();

        console.log(companies);
        res.end(JSON.stringify(companies));
      } catch (error) {
        console.error(error);
      }
    } else if (url === "/addcompany") {
      let body = "";

      req.on("data", (data) => {
        body = JSON.parse(data);
      });

      req.on("end", () => {
        routes[url](body);
      });

      res.end(JSON.stringify({ message: "Added successfuly" }));
    } else {
      res.end("Main page");
    }
  });

  server.listen(PORT, () => {
    console.log(`Server is  running http://127.0.0.1:${PORT}`);
  });
};
