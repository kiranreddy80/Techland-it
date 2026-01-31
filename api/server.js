import cors from "cors";
import cookieParser from "cookie-parser";

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
