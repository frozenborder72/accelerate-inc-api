import dotenv from 'dotenv';
dotenv.config();

export const port = process.env.PORT || 3000;

export const DB_URI =
  process.env.DB_URI || 'mongodb://127.0.0.1:27017/project-3';
export const secret = process.env.SECRET || 'pineapples';
