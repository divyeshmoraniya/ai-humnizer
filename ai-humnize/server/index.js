import express from "express";
const app = express();
const port = 4000;
import cors from "cors";
import multer from "multer";
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({storage})
app.use(cors({
    origin : "*"
}))

app.listen(port , (req,res)=>{
    console.log(`✅ Server is listening on http://localhost:${port}`);
})

app.get("/",(req,res)=>{
    res.json({message : "server run perfect"})
})
app.post("/upload/pdf", upload.single("pdf"), (req, res) => {
    console.log("📥 Uploaded file:", req.file);
    res.status(200).json({ message: "pdf uploaded" });
});
