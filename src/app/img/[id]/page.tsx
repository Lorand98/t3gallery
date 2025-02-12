import { getImage } from "~/server/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idNumber = parseInt(photoId);
  if (isNaN(idNumber)) {
    return <div>Invalid ID</div>;
  }

  const image = await getImage(idNumber);
  return <img src={image.url} alt={image.name} className="max-w-96" />;
}
