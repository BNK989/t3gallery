import Link from "next/link";

const mockUrls = [
  'https://unsplash.../.png',
  'https://unsplash.../.png',
  'https://unsplash.../.png',
  'https://unsplash.../.png',
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
