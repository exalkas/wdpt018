import { data } from "@/data/iphones";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function products() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px]">
      <Head>
        <title>These are all our products</title>
        <meta name="description" content="This is the products page" />
      </Head>
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <Link href={`/product/${item.id}`}>
            <Image src={item.image} width={200} height={300} />
            {/* <img
              src={item.image}
              className="w-[200px] h-[300px] object-cover"
            /> */}
          </Link>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}
