const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>home page</title></head>");
    res.write("<body><h1>welcome to homepage</h1>");

    res.write(
      "<form method='POST' action='/create-user'>username <input type='text'  name='username'/><button type='submit'>submit</button></form>"
    );

    res.write("</body></html>");
    return res.end();
  }

  if (url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>home page</title></head>");
    res.write("<body>");

    res.write("<ul><li>Naresh</li><li>Naveen</li><li>Thiru</li></ul>");

    res.write("</body></html>");
    return res.end();
  }

  if (url === "/create-user") {
    const data = [];
    req.on("data", (chunk) => {
      data.push(chunk);
    });
    req.on("end", () => {
      const bufferedData = Buffer.concat(data).toString();
      console.log("username is :", bufferedData);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(3000);
