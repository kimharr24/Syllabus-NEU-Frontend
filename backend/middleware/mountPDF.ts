import multer from 'multer';

// Stores PDF collected from the front-end in RAM before uploading to S3
const storage = multer.memoryStorage();
const upload = multer({ storage });

// upload middleware must have same name as submission field in NewSyllabusForm
export default upload.single('pdf-file');
