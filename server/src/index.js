import { app } from "./config/express.js";
import { connect } from "./config/db.js";

const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

connect()
  .then(() => {
    try {
      app.listen(PORT, HOST, () => {
        console.log(`Server is running on http://${HOST}:${PORT}`);
      });
    } catch (error) {
      console.error("Error while starting the server: ", error);
    }
  })
  .catch((error) => {
    console.error("Error connecting to database: ", error);
  });

