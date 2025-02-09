import fs from "fs";
import path from "path";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  // This needs to be server-side as it reads from the filesystem
  const imageDirectory = path.join(process.cwd(), "public/images");
  const imageFiles = fs.readdirSync(imageDirectory).map((image, index) => ({
    id: index + 1,
    source: image,
  }));


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...imageFiles, ...imageFiles, ...imageFiles].map((image, idx) => (
          <div key={image.id + "-" + idx} className="w-48">
            <img
              src={`/images/${image.source}`}
              alt={image.source}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
