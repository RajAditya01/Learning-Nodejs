const http = require("http");
const fs = require("fs");
const path = require("path");
const requests = require("requests");
require("dotenv").config();

const homeFilePath = path.join(__dirname, "home.html");
const homeFile = fs.readFileSync(homeFilePath, "utf-8");

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);

    return temperature;
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        requests(
            `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=ca862c18712d99522f312c9072f13972`
        )
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                const arrData = [objdata];
                const realTimeData = arrData
                    .map((val) => replaceVal(homeFile, val))
                    .join("");
                res.write(realTimeData);
            })
            .on("end", (err) => {
                if (err) {
                    console.log("Connection closed due to errors", err);
                    res.writeHead(500);
                    res.end("Internal Server Error");
                } else {
                    res.end();
                }
            });
    } else {
        res.writeHead(404);
        res.end("File not found");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Server is running on http://127.0.0.1:8000");
});
