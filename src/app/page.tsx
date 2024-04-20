import Link from "next/link";

const mockUrls = [
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
  `https://source.unsplash.com/random/200x180?sig=${Math.random().toString(36).substring(7)}`,
]

const mockImages = mockUrls.map((url,i) =>({
  id: i + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages, ...mockImages, ...mockImages].map((img) => (
          <div key={img.id} className="w-48 p-4">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
