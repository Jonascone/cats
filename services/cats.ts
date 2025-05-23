const cats: Cat[] = [
  {
    name: 'Bobby',
    imageUrl: '/images/cats/bobby.jpg',
    imageCaption: 'Look at him being a snoozy boi.',
    bio: "Bobby is a big old boy. We think he is around 10 years old. He likes wet food, but doesn't always eat it. Mei-Mei and Sack-chan don't like wet food at all!",
    age: 10,
    primaryColor: 'red',
  },
  {
    name: 'Mei-Mei',
    imageUrl: '/images/cats/mei-mei.jpg',
    imageCaption: "Mei-Mei hanging out in Bobby's basket.",
    bio: 'Mei-Mei is our little princess. She likes to chase bugs and birds. She makes more noise than Sack-chan, especially when she is let outside, where she rolls on the floor and makes many mews.',
    dob: new Date('2022-06-15'),
    primaryColor: 'pink',
  },
  {
    name: 'Sack-chan',
    imageUrl: '/images/cats/sack-chan.jpg',
    imageCaption: 'Big fluffy fluff ball.',
    bio: [
      'Sack-chan is a big fluffy fluff ball and loves to sit on bags.',
      'She loves custard and has a cat doughnut that she sits in.',
      'We call her custard-chan and doughnut-chan.',
      'She is very quiet.',
    ].join('\n'),
    dob: new Date('2022-06-15'),
    primaryColor: 'orange',
  },
];

export function getCats() {
  console.log('getCats');
  return cats;
}

export function getCatByName(name: string) {
  return cats.find((cat) => cat.name.toLowerCase() === name.toLowerCase());
}

export function getCatAge(cat: Cat) {
  if (cat.age !== undefined) return cat.age;
  if (cat.dob) {
    const nowTimestamp = Date.now();
    const dobTimestamp = cat.dob.getTime();
    const ageTimestamp = nowTimestamp - dobTimestamp;
    return (ageTimestamp / (365 * 24 * 60 * 60 * 1000)).toFixed(0);
  }

  return -1;
}
