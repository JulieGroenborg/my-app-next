export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <h1>
        {data.name}'s yndlingsfarve er {data.favouriteColor}
      </h1>
      <img width={250} src={data.image.url} alt="" />
    </main>
  );
}
