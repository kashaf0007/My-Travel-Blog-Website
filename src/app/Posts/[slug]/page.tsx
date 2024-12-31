'use Client'
import React from 'react';
import Comments from '@/app/Components/Comments';

const Posts = {
  'mountain': {
    title: 'Mountains',
    image: '/mountain.jpeg',
    content: `
Mount Karangetang is an awesome Jurassic Park-looking volcano that dominates the remote island of Siau in North Sulawesi, Indonesia.
You can not go anywhere on tiny Siau island without seeing this majestic volcano and its twin smoking craters.
 If you are lucky, you may even get to see it spouting molten lava and rock bombs at night, which it does pretty often.
 <br/>
 First of all, lets talk about safety. Karangetang is a highly active volcano — probably one of the most active volcanoes in the world.
The local guides are knowledgeable and any seismic activity is monitored by the Indonesian government, but there is still plenty of risk involved in climbing this mountain. It may erupt at any time.
    `,
  },
  'sea': {
    title: 'Park in Thailand',
    image: '/sea.jpeg',
    content: `
     One of the best places to see nature and animals in Thailand is at the Khao Sok National Park, which is not too far from Phuket and Krabi.
We spent 3 days at Khao Sok and had a blast. The turquoise lake is really nice, and it is easy to see animals in the park. We even saw wild elephants!
The best way to experience Khao Sok is to spend several days at the park, exploring the lake by boat, trekking to see animals and caves in the jungle, and staying at least one night in a floating bungalow on the lake.
<br/>
 You can do a day trip to Khao Sok from a touristy area like Phuket, Krabi, Khao Lak, or Surat Thani. This is the quickest and easiest option, but you won not have as much time to see the park. It is too short, in my opinion.
 This option gives you the most flexibility and it is also more cost efficient. By basing yourself directly at the Khlong Sok village near the park, you can stay as long as you like, and do excursions for the things that interest you most. It is the best way to visit the park if you are not limited on time.
    `
  },
  'mosque': {
    title: 'Faisal Mosque',
    image: '/mosque.jpeg',
    content: `
Abu Dhabi may not be as well known as Dubai when it comes to tourism hotspots, but there is at least one thing you should definitely see here and that is the Sheikh Zayed Grand Mosque.
Like the name implies, it is very big and grand, and it is visited by millions of tourists every year. It actually reminds me a bit of the Taj Mahal in India, and that is a good thing.
<br/>
<br/>
The Grand Mosque was built between 1996 and 2007, and it takes its name from Sheikh Zayed bin Sultan, the founder of the United Arab Emirates.
Located in Abu Dhabi, it is the biggest mosque in the UAE, and one of the biggest mosques in the world. Construction cost a whopping 2 billion dirhams ($545 million USD).
Artisans were brought in from many countries, including Germany, India, Iran, Italy, Malaysia, Morocco, New Zealand, Turkey, and the United Kingdom.
    `
  },
  'park': {
    title: 'Golden Bay',
    image: '/park.jpeg',
    content: `
The first thing you need to know about Golden Bay is that it is like stepping back to the 90s. Which is saying something because the rest of New Zealand also feels like a step back in time. 
Every few streets, there are fruit stands with honesty boxes, and no one is in a rush to do anything. It is such a nice feeling. Golden Bay is an area at the very tip-top of the South Island. It is one of the sunniest areas of New Zealand and is home to some epic independent growers and farms.
<br/>
Golden Bay is a huge bay that stretches from the top of the Abel Tasman National Park all the way out to Farewell Spit, a 26-kilometer-long sandspit. It forms almost a perfect “C” shape and is one of the more remote places to get to in New Zealand. You have to want to go there; it is not on the way anywhere. 
    `
},
  'waterfall': {
    title: 'WaterFall',
    image: '/waterfall.jpeg',
    content: `
If you are looking for a refreshing break from the hustle and bustle of Islamabad, you don not have to go far to find a peaceful escape.
This turquoise, clear waterfall is hidden between the massive mountains and dense forest. Tourists can reach the Makhnial Waterfall in 10 minutes from Pine Valley Residencia. Visitors also have the option to hike down the Margalla Hills from here.
<br/>
The climb is relatively easy, and hikers can also take a path in-between to visit a grazing meadow. The Makhnial Ridge Trail is behind Trails 1-6 of the Margalla Trails, which is why it is known as the Second Hillside Trail. It is also the second stop on the 44-km ridge from Shah Allah Ditta to Murree.
<br/>
The total travel time from Makhnial to the city of Tilhar is around 4 hours. 
`,
  },
  'mall': {
    title: 'DUBAI MALL',
    image: '/dubai .jpeg',
    content: `
Dubai Mall is the worlds largest destination for shopping, entertainment and leisure, located next to the worlds tallest building, Burj Khalifa. Featuring over 1,200 retail stores, two major department stores and hundreds of food and beverage outlets, Dubai Mall covers more than 1 million sqm  an area equivalent to 200 football pitches. Even an entire day spent here isn't enough to see it all.
 Along with its huge array of shops and restaurants, the venue is home to a range of other fun attractions.
 <br/>
 <br/>
 The worlds largest mall has also grown even larger with the 2019 opening of Dubai Mall Zabeel, a significant expansion that welcomed a host of new lifestyle experiences, dining options, retail options and 3,000 new parking spaces. The new Zabeel extension adds almost 15,000sqm of lifestyle space, with an incredible array of art on display  all linked by a fully air-conditioned link bridge from Dubai Mall.
    `,
  },
  'museum': {
    title: 'National Meseum in Korea',
    image: '/korea.jpeg',
    content: `
    We woke to the sound of heavy rain beating against the windows and on checking the forecast it seemed to be set in for the day.  Breakfast was again tasty with some different hot dishes from the previous morning.  I spotted some cream of mushroom soup which is not something I would usually have for breakfast but it tasted delicious served with croutons. 
     I find it surprising when travelling through Asia to see things like spaghetti bolognese, fried chicken and stir fried beef and rice all available as breakfast options.  Naturally, there are also yogurts, fresh fruit, rolls, toast and croissants to keep everyone happy.  Returning to our room, 
     due to the inclement weather, we re-scheduled our itinerary so that we could keep indoors as much as possible.
     <br/>
     Our first stop of the day was to the National Museum of Korea located at Ichon metro station.  The museum is surrounded by a mirror lake and pagoda which did not look at its best due to the grey skies.  The majority of Seouls museums are closed on Mondays but thankfully this one was open giving us a respite from the rain.
   `,
  },

  'japan': {
    title: 'JAPAN',
    image: '/japan.jpeg',
    content: `
    I love visiting Japan. Even after multiple visits, I never get tired of wandering the countrys historic temples, feasting on its incredible sushi, and soaking up the breakneck pace of life in Tokyo.
<br/>
After over half a dozen visits, I have learned through trial and error how to best explore the country. English is not widely spoken, and once you get out of the big cities,
 it is even less common. That means things like online maps and translation apps are vital for every traveler.
 `,
  },
  'paris': {
    title: 'EIFFEL TOWER',
    image: '/paris.jpeg',
    content: `
If you are ready to explore the beautiful city of Paris, then we have got you covered! There is so much to see and do in this iconic city, so we compiled this guide to help you make the most of your time.
<br/>
We love being tourists in Paris, but as with any popular tourist city, there are lots of activities here that are overhyped and not worth your money. So after trying out tons of different tours and attractions, we have rounded up the 10 absolute best things to do to ensure that you enjoy your city break to the max.
 From famous landmarks to dinner cruises, champagne tastings, and history deep-dives, we will show you how to craft the perfect Parisian getaway! 
<br/>
 <br/>
 We booked this tour because it not only included entry to the Eiffel Tower, but we also had a guide who took us to all of the different levels and taught us about the history of this iconic landmark. After all, it is one of the most famous buildings in the entire world,
  so we thought we might as well go for an in-depth experience! 
<br/>
<br/>
Our guide, Ruth, was fantastic. She knew so much of the Eiffel Towers history, which turned out to be super interesting! She also ensured that we had plenty of time at each level to snap beautiful photos of Paris and just enjoy the spectacular views. 
    `,
  },
  'rome': {
    title: 'Roman Colosseum.',
    image: '/rome.jpeg',
    content: `
Like the Trevi Fountain and Spanish Steps the Roman Ruins and Colosseum was also within walking distance from our Hostel.
 I am excited  to see these iconic sites first hand. As we are walking down the street to enter the Roman Ruins , we get our first glimpse of the Roman Colosseum.
<br/>
<br/>
It is hard not to be drawn to the Roman Forum (Foro Romano) to begin exploring the Ruins. It is taller than everything and still a sturdy and relatively complete structure. Amazing when you think about how ancient and old this structure is.
 <br/>
    `,
  },
  'alesund': {
    title: 'Alesund, Norway - Norways Prettiest City',
    image: '/mountains.jpeg',
    content: `
At the entrance to the Geraingerfjord sits the port town of Alesund.  After a fire destroyed much of the city in 1904, it was rebuilt in the Art Nouveau style.
It's now widely regarded as Norway's prettiest city. And it was the second stop on our Holland America cruise through the fjords of Norway.
<br/>
<br/>
One of Alesund's most popular things to do is walk - or take a bus - to Mount Aksla and its famous viewpoint.
Though it's considered a "must do" we decided that we were here to see fjords so we signed up for an excursion to explore one of the nearby ones.
So after breakfast we walked to the next pier and board a boat to go exploring by water.
    `,
  },
  'vintage': {
    title: 'Valldemossa Itinerary',
    image: '/vintage.jpeg',
    content: `

Valldemossa Itinerary Nestled in the Tramuntana mountains (Serra de Tramuntana) in Mallorca, Valldemossa is a quintessential European village, full of charming cobblestone streets, tiny cafes, and stunning mountain views in the backdrop.     
Marked by its ancient stone buildings adorned with emerald green shutters, Valldemossa looks like a movie set. Every vantage point is more stunning than the last.
<br/>
<br/>
 Most of the village is pedestrian only which makes Valldemossa even more relaxing. It is a wonderful place to get lost for a day, and since it is mostly car-free, it was an easy place to explore with our girls.
 They loved scampering around Valldemossa. 
 <br/>
 <br/>
 If you only have time to visit one of the mountain towns in Mallorca, make it Valldemossa. Deia is also beautiful but tends to feel busier since cars can drive through it.
 Even though Valldemossa was busy with tourists like ourselves, it somehow still felt so serene.

   `,
  },
  'globe': {
    title: 'INTERNATIONAL GLOBE',
    image: '/globe.jpeg',
    content: `
An international business strategy refers to the plan you will put together to grow your international sales and/or footprint. This international strategy you'll implement to expand internationally is essentially an extension of the company's core values and practices, tailored to meet global integration needs and local demands.
<br/>
<br/>
A successful international business strategy prioritizes exceptional customer service and carefully selects market entry strategies that are most likely to succeed. An export sales and international expansion strategy can be a stepping stone for companies looking to expand their reach across international borders.
<br/>
<br/>
This article aims to be the condensed ultimate guide to building an international business strategy: from a humble exporting strategy for newcomers to a plan that will help you expand globally. Below, we're covering the significant aspects that will transform your small and mid-size firm into a global company, joining the club of the large multinational corporations of this world.
    `,
  },
  'island': {
    title: 'Island in Polynesia.',
    image: '/island.jpeg',
    content: `
Bora Bora is part of the Society Islands archipelago, which is divided into Windward Islands (including Tahiti and Moorea) and Leeward Islands (including Bora Bora, Huahine, Raiatea, Maupiti). 17,000 km from the mainland France, and 255 km northwest of Tahiti, in the middle of the Society Islands, Bora Bora is known as the Pearl of the Pacific.
 Renowned for its lush greenery and turquoise lagoon, this small island measures no more than 38 km2 in area: 8km long and 5km wide
<br/>
<br/>
A volcano set over one of the most beautiful lagoons in the world, Bora Bora is probably the most famous island in the Society Archipelago. More than Tahiti or any other island in French Polynesia, it is the source of the idyllic image that characterizes these islands.    
It is hard not to be drawn to the Roman Forum (Foro Romano) to begin exploring the Ruins. It is taller than everything and still a sturdy and relatively complete structure. Amazing when you think about how ancient and old this structure is.
 <br/>
    The lagoon of Bora Bora remains an unforgettable memory, as the islands tour in a pirogue (dugout canoe) or swimming with sharks and stingrays.  The French Polynesian weather is tropical oceanic with two seasons: a dry season from April to October and a wet season from November to March. To travel to Bora Bora, it is best to choose the cool, dry season, which runs from April to October. 
    The season in which you decide to go to Bora Bora will obviously influence the cost of your trip.
    `,
  },
  'road': {
    title: ' Icelands sensational Route 1, motorcycle tour',
    image: '/road.jpeg',
    content: `
    I was soliciting when I mentioned to a neighbour that I was going to Iceland on a motorbike, but even when Id cleared up the confusion and explained that I was referring to the country, not the local supermarket, his reaction was still unremarkable to say the least. 
<br/>
<br/>
Icelands one of those countries that everyones vaguely heard of, but few know much about. It is up in the Arctic somewhere, freezing cold, light all summer, dark all winter and inhabited by people who wear wooly jumpers, eat whale and believe in trolls. Only some of that is untrue.
  `,
  },
};
          
export default function Blog ({ params }: { params: {slug: string } }) {
const post = Posts[params.slug as keyof typeof Posts];

 if(!post){
  return(
    <h2 className=' text-2xl font-bold text-center mt-10'>Not Found</h2>
  )
 }
 return (
  <div className=" min-h-screen">
    
    <div className="max-w-8xl mx-auto p-10">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-6 text-center ">{post.title}</h1>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-auto sm:h-96 object-cover rounded-xl shadow-lg mb-8 "
      />
<div className="text-2xl text-gray-800  font-medium" dangerouslySetInnerHTML={{ __html: post.content }} />       
<Comments/>

    </div>
 
  </div>
);
}









 