import dotenv from 'dotenv';
dotenv.config();

const artwork = [
  {
    artistFbId: '4eYUL2dx05ZI53zXzOR0igMm6n62',
    title: '78704',
    address: 'Manchaca Road & Lamar Blvd',
    year: null,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Photo credit: wileyross.com, freefuninaustin.com.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621983027/artwork/mbrtnfez3amzo5wuqxww.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621983027/artwork/dmwuolxiv6tuohfautll.jpg`,
    ],
    coords: [-97.7813573891608, 30.244331187271747],
  },
  {
    artistFbId: '4eYUL2dx05ZI53zXzOR0igMm6n62',
    title: 'John Prine Tribute',
    address: 'Thundercloud Subs, 201 E Riverside Dr',
    year: 2020,
    aboutText:
      'This piece is a tribute to musician John Prine, who died of coronavirus complications in April 2020. "The Tree of Forgiveness" is the name of his final studio album. Photo credits: kxan.com, austin.com.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621984204/artwork/dkv64drct1q2xjl02ocs.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621984204/artwork/tenl6jr1zogjdooabqlo.jpg`,
    ],
    coords: [-97.7452519587794, 30.255387760727515],
  },
  {
    artistFbId: '4eYUL2dx05ZI53zXzOR0igMm6n62',
    title: 'Willie Nelson',
    address: 'East 7th St at Neches St',
    year: 2016,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Photo credit: streetbeatseats.com, Google StreetView.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621991645/artwork/kgcrax3xydfk5zgnznkn.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621991645/artwork/o84norvw223ko4mfkww2.jpg`,
    ],
    coords: [-97.73791230264497, 30.26778606229203],
  },
  {
    artistFbId: '6nKIvi6JWWWojPn2mkH1P9aW31o1',
    title: 'Birds',
    address: '6444 Burnet Rd',
    year: null,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621991497/artwork/cl8yhlo0srrkfv5ylihk.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621991497/artwork/obkqkuhcggdefr6xyzys.jpg`,
    ],
    coords: [-97.73920864497902, 30.340907072310998],
  },
  {
    artistFbId: '6nKIvi6JWWWojPn2mkH1P9aW31o1',
    title: 'Austin is where my heart is',
    address: 'Bramlett Real Estate, 5202 Burnet Rd',
    year: null,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621991426/artwork/qkoc164efh9anzq0zbic.jpg`,
    ],
    coords: [-97.73988816032303, 30.3239849402299],
  },
  {
    artistFbId: '6nKIvi6JWWWojPn2mkH1P9aW31o1',
    title: 'birds @ HOPE Outdoor Gallery',
    address: '11th & Baylor St',
    year: null,
    aboutText:
      'Mural project at a 3-story abandoned co-op space turned graffiti park. Photo credit: Wally Gobetz @ Flickr.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621991398/artwork/btcmpojvgw9pzsgxeode.jpg`,
    ],
    coords: [-97.75277470265229, 30.27658724180947],
  },

  {
    artistFbId: 'HnMUEwZJU0gtJznZ3miTddayOhq2',
    title: 'Word to the Wise',
    address: '907 Barton Springs Rd',
    year: 2015,
    aboutText:
      'This project was part of a larger SXSW collaboration with powwowhawaii. The horned owl splits the piece into day & night and represents wisdom & power. Photo credit: Jim Nix @ Flickr, Google StreetView.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621992952/artwork/mh5shwbnowbbkgg7vhik.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621992929/artwork/smrbp0ouhvyozm8vqqw1.jpg`,
    ],
    coords: [-97.7543494107223, 30.25964239857295],
  },
  {
    artistFbId: 'bN5cRPjDSnSTKxwdlcn8TOha6VX2',
    title: 'Musicians',
    address: 'N Lamar Blvd & W 10th St',
    year: null,
    aboutText:
      'When this project was completed, this building was home to Cheapo Records. Features Jim Morrison, Jimi Hendrix, Janis Joplin, and other music greats. Photo credit: Wally Gobetz @ Flickr.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621993533/artwork/ltujedktnmxovnyyirfc.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621993470/artwork/acebjoss8oeudmaaglo8.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621993470/artwork/acebjoss8oeudmaaglo8.jpg`,
    ],
    coords: [-97.75224154498048, 30.275092203253],
  },
  {
    artistFbId: 'bjRTyitlbya8TCoy6TWQckSdVLA2',
    title: 'Create Fun and a Little Weirdness',
    address: '1511 E 6th St',
    year: null,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Photo credit: Wally Gobetz @ Flickr.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621994325/artwork/mafqcl6mdzpehyta9rhg.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621994325/artwork/xbmlwv9bksav4f1lkh3d.jpg`,
    ],
    coords: [-97.7267434953068, 30.262841390078734],
  },
  {
    artistFbId: 'E5nG1mbSNeWVnEKxHqXj23Gt8xg1',
    title: 'East Austin: Mural at Ciscos',
    address: '1511 E 6th St',
    year: 2013,
    aboutText:
      'This mural was painted in partnership with the Austin Mural Program, with the help of 6 students from The Art School at The Contemporary Austin. The surreal imagery was inspired by stories told by Clovis Cisneros, son of former owner and restaurant namesake Rudy "Cisco" Cisneros. Near the center, a boy on a swing looks off into the distance, embracing the past while contemplating the possibilities of the future. Credit: Wally Gobetz @ Flickr.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621994922/artwork/jfqfyc8xsj7mgozcwzp6.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621994922/artwork/hil5kacw5ilmbvsys1gi.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621994922/artwork/xjlxzvlml6tliu35tvtg.jpg`,
    ],
    coords: [-97.72686433776542, 30.262961647418575],
  },

  {
    artistFbId: 'nPOC2SRFWhaJTSv2BlsN80sDcbE2',
    title: 'Tau Ceti',
    address: 'E 2nd St & Brazos St',
    year: 2018,
    aboutText:
      "Austin's tallest public artwork extends 10 floors up a parking structure. The title is inspired by a star in the constellation Cetus. Photo credit: do512.com.",
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621995448/artwork/jvujuyu3r9dtp5mehsqa.jpg`,
    ],
    coords: [-97.74287963148848, 30.264030314742257],
  },

  {
    artistFbId: 'tNNwY3ippxQWKbpIoVS4nWufX2J2',
    title: 'Hi, How are You (Jeremiah the Innocent)',
    address: 'W 21st St & Guadalupe St',
    year: 1993,
    aboutText:
      "While one of Austin's simplest murals, this is one of the city's favorites. The mural was commissioned by Sound Exchange music store owner Craig Koon. When the mural was threatened with removal in 2004, a neighborhood group convinced the building's new owners to keep the mural intact.",
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621996155/artwork/gdf3955wbisnwhivoyub.jpg`,
    ],
    coords: [-97.74194063148802, 30.28388873507889],
  },
  {
    artistFbId: 'tNNwY3ippxQWKbpIoVS4nWufX2J2',
    title: 'Love is the Question/Love is the Answer',
    address: "Nau's Enfield Drug, 1115 W Lynn St",
    year: null,
    aboutText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Photo credit: pmonaghan @ Flickr, Google StreetView.',
    tags: [],
    photoUrls: [
      `${process.env.CLOUD_UPLOAD_URL}/v1621996475/artwork/wtax0a2bcmcppeoaxuvt.jpg`,
      `${process.env.CLOUD_UPLOAD_URL}/v1621996475/artwork/dcbdamptxrojl4ifaaag.jpg`,
    ],
    coords: [-97.75911191534367, 30.280589496024003],
  },
];

export default artwork;
