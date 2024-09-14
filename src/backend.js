const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    console.log("recived")
    res.write("hhhh");
    res.end();
})
server.listen(3000,()=>{console.log("inn")});