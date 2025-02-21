import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";const app = express();
import authRouter from "./routes/auth.route";
import cors from "cors";
import axios from "axios";

dotenv.config();
app.use(bodyParser.json());
app.use(cors());




app.get("/hi", (req, res) => {
    res.send("Hello from mailedit");
  });


app.use("/api/v0", authRouter);


const PORT = process.env.PORT || 4000;



// Function to ping /hi every 5 minutes
const pingServer = () => {
    const serverUrl = `https://mailedit.onrender.com/hi`; // Change this if deployed
    setInterval(async () => {
      try {
        const response = await axios.get(serverUrl);
        console.log("Pinged /hi:", response.data);
      } catch (error) {
        console.error("Error pinging /hi:", error);
      }
    }, 5 * 60 * 1000); // 5 minutes in milliseconds
  };
  


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
    pingServer(); // Start pinging after the server starts
  });