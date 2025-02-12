import Image from "next/image";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
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
  return (
    <Modal>
      <img src={image.url} alt={image.name} className="max-w-96"/>
    </Modal>
  );
}
