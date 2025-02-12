import { deleteAction } from "~/app/action";
import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import { FullPageImageView } from "~/_components/full-page-image-view";

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
  return (
    <Modal>
      <FullPageImageView photoId={photoId} />
    </Modal>
  );
}
