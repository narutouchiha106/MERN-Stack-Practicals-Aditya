# Practical 09 — Recipe Image Archive
Upload recipe photos with Multer and save their metadata in MongoDB. Accepted types: PNG/JPEG/WEBP; maximum 4 MB. Run MongoDB, then `cd server && npm install && npm start` (port 5409). POST `/api/recipes` as multipart form-data with `recipeName` and `photo`; GET `/api/recipes` lists saved metadata. Copy `.env.example` to `.env` to configure MongoDB.
