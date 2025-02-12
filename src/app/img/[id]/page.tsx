import { FullPageImageView } from "~/_components/full-page-image-view";
import { getImage } from "~/server/queries";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;

  return <FullPageImageView photoId={photoId} />;
}
