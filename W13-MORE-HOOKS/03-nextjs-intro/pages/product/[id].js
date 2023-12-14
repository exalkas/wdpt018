// /:id
// [id]
// const {id} = useParams()
import { data } from "@/data/iphones";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const router = useRouter();
  console.log("🚀 ~ router:", router);

  const { id } = router.query;

  return <div>the id is {id}</div>;
}
