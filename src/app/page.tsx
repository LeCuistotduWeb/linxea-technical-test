import { redirect } from "next/navigation";

/* TODO: redirect to /produits when visiting the home page
  * This is a temporary solution until we implement the actual home page
  * We can remove this redirect once we have the home page ready
  * This is just to avoid having an empty home page for now
*/
export default function Home() {
  redirect("/produits");
}
