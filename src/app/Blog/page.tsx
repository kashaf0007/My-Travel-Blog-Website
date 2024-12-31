'use Client'
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
  const posts = [
    {
      id: 'mountain',
      title: 'MOUNTAINS',
      description: 'Mount Karangetang island of Siau in North Sulawesi..',
      image: '/mountain.jpeg',
    },
    {
      id: 'sea',
      title: 'PARK',
      description: 'Khao Sok National Park In Thailand.',
      image: '/sea.jpeg',
    },
    {
      id: 'mosque',
      title: 'MOSQUE:',
      description: 'Sheikh Zayed Grand Mosque in Abu Dhabi,UAE.',
      image: '/mosque.jpeg',
    },
    {
      id: 'park',
      title: 'SOUTH ISLAND', 
      description: 'It is one of the sunniest areas of New Zealand and is home to some epic independent growers and farms.',
      image: '/park.jpeg',
    },
    {
      id: 'waterfall',
      title: 'WATERFALL IN ISLAMABAD',
      description: ' Waterfalls in Islamabad are a great way to relax with friends and family.',
      image: '/waterfall.jpeg',
    },
    {
      id: 'mall',
      title: 'DUBAI MALL',
      description: 'The worlds largest shopping, entertainment and leisure destination',
      image: '/dubai .jpeg',
    },
    {
      id: 'museum',
      title: 'The National Museum of Korea',
      description: 'Museum of Korea located at Ichon metro station.',
      image: '/korea.jpeg',
    },
    {
      id: 'japan',
      title: 'JAPAN',
      description: 'Japan has a variations between the north and south.',
      image: '/japan.jpeg',
    },
    {
      id: 'paris',
      title: 'PARIS',
      description: 'Paris is the capital of the country of France.',
      image: '/paris.jpeg',
    },
    {
      id: 'rome',
      title: 'ROME',
      description: 'Roman Ruins & Colosseum Rome, Italy. ',
      image: '/rome.jpeg',
    },
    {
      id: 'alesund',
      title: 'Alesund, Norways Prettiest City',
      description: 'Geraingerfjord sits the port town of Alesund.',
      image: '/mountains.jpeg',
    },
    {
      id: 'vintage',
      title: 'Valldemossa Itinerary',
      description: ' Valldemossa is a  European village , in Mallorca .',
      image: '/vintage.jpeg',
    },
    {
      id: 'globe',
      title: 'Global sucess',
      description: ' The Ultimate Guide for Global Success.',
      image: '/globe.jpeg',
    },
    {
      id: 'island',
      title: 'Island in Polynesia',
      description: ' Valldemossa is a  European village , in Mallorca .',
      image: '/island.jpeg',
    },
    {
      id: 'road',
      title: ' Motorcycle tour',
      description: 'riding Icelands Route 1 is the perfect motorcycle tour.',
      image: '/road.jpeg',
    },

  ];
  return (
      <div>
        <div className="text-center mb-12 mt-7  ">
          <h2 className="text-5xl font-extrabold text-black">Explore Destinations</h2>
        </div>
        <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {posts.map((posts ,) => (
            <Link href={`/Posts/${posts.id}`} key={posts.id}>
              <div className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition bg-slate-100 bg-opacity-90 ml-6">
                <div className="h-56 overflow-hidden ">
                  <Image
                    src={posts.image}
                    alt={posts.title}
                    height={"250"}
                    width={"200"}
                    className="w-full h-full object-cover transform "
                  />
                </div>
                <div className="p-9">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500  mb-2">
                    {posts.title}
                  </h3>
                  <p className="text-black font-medium">{posts.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
  );
}
