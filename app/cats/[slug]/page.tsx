import Image from 'next/image';
import Link from 'next/link';
import { getCatAge, getCatByName } from 'services/cats';

const CatNotFound = () => (
  <div className="flex flex-col gap-2 items-center">
    <h1 className="text-4xl text-blue-700">Cat not found {'\u{1F62D}'}</h1>
    <Link
      href="/"
      className="w-fit border-2 border-pink-300 radius-md px-4 py-2"
    >
      Go back
    </Link>
  </div>
);

type CatBioProps = {
  cat: Cat;
};
const CatBio = ({ cat }: CatBioProps) => (
  <div className="grow flex flex-row gap-4">
    <article className="flex-1/3">
      <h1 className="text-4xl">{cat.name}</h1>
      <h2 className="text-2xl text-current/90">
        Date of birth: {cat.dob?.toLocaleDateString('en-GB') || 'Unknown'}{' '}
        {getCatAge(cat)} years old
      </h2>
      <p>{cat.bio}</p>
    </article>
    <figure className={`relative flex-2/3 rounded-sm border-8`}>
      <Image
        alt={`Image of ${cat.name}`}
        fill
        className="object-cover"
        src={cat.imageUrl}
      />
      <figcaption className="absolute w-full bottom-0 px-4 py-2 text-white text-shadow-md text-shadow-black text-xl text-center">
        {cat.imageCaption}
      </figcaption>
    </figure>
  </div>
);

export default async function CatPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cat = getCatByName(slug);
  if (!cat) {
    return <CatNotFound />;
  }

  return (
    <section
      className={`flex flex-col h-full min-h-full cat-bio-color-${cat.primaryColor}`}
    >
      <CatBio cat={cat} />
    </section>
  );
}
