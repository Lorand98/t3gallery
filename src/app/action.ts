"use server"; // This ensures the entire file is recognized as a server component

import { deleteImage } from "~/server/queries";
import { redirect } from "next/navigation";

export async function deleteAction(id: number) {
  await deleteImage(id);
  redirect("/"); // Ensure redirect happens here
}