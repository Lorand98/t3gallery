import fs from "fs";
import path from "path";

export default function HomePage() {
  // This needs to be server-side as it reads from the filesystem
  const imageDirectory = path.join(process.cwd(), "public/images");
  const imageFiles = fs.readdirSync(imageDirectory).map((image, index) => ({
    id: index + 1,
    source: image,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...imageFiles, ...imageFiles, ...imageFiles].map((image) => (
          <div key={image.id} className="w-48">
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
