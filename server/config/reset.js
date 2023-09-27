import { pool } from "../config/database.js";
import "../config/dotenv.js";
import blogData from "../data/blogs.js";

const createBlogsTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS blogs;
  
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL,
        content VARCHAR NOT NULL
      )
    `;
  try {
    await pool.query(createTableQuery);
    console.log("🎉blogs table created successfully");
  } catch (err) {
    console.error("⚠️ error creating blogs table", err);
  }
};

const seedBlogsTable = async () => {
  await createBlogsTable();

  blogData.forEach((blog) => {
    const insertQuery = {
      text: "INSERT INTO blogs (name,  image, description, submittedBy, submittedOn, content) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      blog.name,
      blog.image,
      blog.description,
      blog.submittedBy,
      blog.submittedOn,
      blog.content,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting blog data", err);
        return;
      }
      console.log(`✅ ${blog.name} added successfully`);
    });
  });
};

seedBlogsTable();
