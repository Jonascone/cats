import Image from 'next/image';
import Link from 'next/link';
import { getCats } from 'services/cats';

type CatItemProps = {
  name: string;
  imageUrl: string;
};
function CatItem({ name, imageUrl }: CatItemProps) {
  return (
    <Link
      className="block relative size-48 border-gray-200 border-4 rounded-xs hover:border-pink-200 transition-colors duration-500"
      href={`/cats/${name.toLowerCase()}`}
    >
      <figure>
        <Image
          fill
          alt={`Image of ${name}`}
          src={imageUrl}
          className="object-cover"
        />
      </figure>
      <figcaption className="absolute w-full bottom-0 p-2 text-center text-white text-shadow-lg text-shadow-black">
        {name}
      </figcaption>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl text-center">Here are the cats!</h1>
      <div className="w-full justify-center items-center flex gap-4 p-16">
        {getCats().map((cat, i) => (
          <CatItem key={cat.name} {...cat} />
        ))}
      </div>
    </>
  );
}
