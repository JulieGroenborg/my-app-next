import Image from "next/image";

export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1>
        {data.name}s yndlingsfarve er {data.favouriteColor}
      </h1>
      <Image
        // className="w-auto h-auto"
        src={data.image.url}
        alt="A cute dog"
        width={data.image.width}
        height={data.image.height}
        priority={true}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        400px"></Image>
    </main>
  );
}
