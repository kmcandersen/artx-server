import dotenv from 'dotenv';
dotenv.config();

const artists = [
  {
    fbId: '4eYUL2dx05ZI53zXzOR0igMm6n62',
    name: 'Wiley Ross',
    initials: 'WR',
    email: 'wross@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe: "I'm a painter, muralist and musician.",
    moreInfo: 'wileyross.com',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/ghy68fjpkmu2vdvyumks.jpg`,
    ],
  },
  {
    fbId: '6nKIvi6JWWWojPn2mkH1P9aW31o1',
    name: 'Drib',
    initials: 'D',
    email: 'drib@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe: 'Lorem ipsum dolor sit amet.',
    moreInfo: 'instagram.com/this_bird_',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/kickmspwqnqg4pslirkq.jpg`,
    ],
  },
  {
    fbId: 'HnMUEwZJU0gtJznZ3miTddayOhq2',
    name: 'David "MEGGS" Hooke',
    initials: 'DH',
    email: 'meggs@example.com',
    displayEmail: true,
    city: 'Melbourne',
    state: '',
    country: 'Australia',
    tags: [],
    aboutMe:
      'David "MEGGS" Hooke is a mural, street and fine artist recognized for his large scale murals and detailed paintings that combine elements of nature, industry and abstraction to create imagery that evokes a sense of flowing movement and change. (artist website)',
    moreInfo: 'davidmeggshooke.com',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/xt1pefj39c0rpby1kjdg.jpg`,
    ],
  },
  {
    fbId: 'bN5cRPjDSnSTKxwdlcn8TOha6VX2',
    name: 'J Cappolino',
    initials: 'JC',
    email: 'jcapp@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe: 'Lorem ipsum domor sit amet.',
    moreInfo: '',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/doohxcockfmgkwvdtf1y.jpg`,
    ],
  },
  {
    fbId: 'bjRTyitlbya8TCoy6TWQckSdVLA2',
    name: 'Jade Fusco',
    initials: 'JF',
    email: 'jfusc@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe:
      'My name is Jade, and I create from the Muses of DMZL ("damsel", in delight, maybe disguise...but never in distress!) I create installation art, wearable art, talking art, costumes, songs, etc! (etsy.com/people/jadefusco1)',
    moreInfo: 'instagram.com/DMZL_in_delight',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/knyg5li0rgvrkyxyylld.jpg`,
    ],
  },
  {
    fbId: 'E5nG1mbSNeWVnEKxHqXj23Gt8xg1',
    name: 'Nicholas Conrad Miller',
    initials: 'NM',
    email: 'nmill@example.com',
    displayEmail: true,
    city: 'Buffalo',
    state: 'NY',
    country: 'USA',
    tags: [],
    aboutMe: 'Lorem ipsum dolor sit amet. Photo credit: buffalonews.com',
    moreInfo: 'instagram.com/teamrazorwire',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603617/profile/jou309gfut5vv9zhspl0.jpg`,
    ],
  },
  {
    fbId: 'nPOC2SRFWhaJTSv2BlsN80sDcbE2',
    name: 'Josef Kristofoletti',
    initials: 'JK',
    email: 'jkris@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe:
      'Josef Kristofoletti is an internationally working mural artist. At the intersection of painting, architecture, and public space, his large scale site specific work creates a human related background that is worthy of daily life. (artist website)',
    moreInfo: 'kristofoletti.com',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/kpv9eezpv1a4xozqy9w9.jpg`,
    ],
  },
  {
    fbId: 'tNNwY3ippxQWKbpIoVS4nWufX2J2',
    name: 'Daniel Johnston',
    initials: 'DJ',
    email: 'djohn@example.com',
    displayEmail: false,
    city: 'Houston',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe:
      'Daniel Johnston was an artist and musician who passed away in 2019. The city of Austin recognizes January 22, Johnston\'s birthday, as "Hi, How Are You Day" to encourage discussion of mental health issues.',
    moreInfo: '',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1622603616/profile/nbrbipj9fzusmo1xjtal.jpg`,
    ],
  },
  {
    fbId: '9H9fx9RYAtOYleTZ7F4PzzReFuO2',
    name: 'Larry Fitzgerald',
    initials: 'LF',
    email: 'lfitz@example.com',
    displayEmail: true,
    city: 'Paradise Valley',
    state: 'AZ',
    country: 'USA',
    tags: [],
    aboutMe: '#11',
    moreInfo: '',
    profilePhotoUrl: [],
  },
  {
    fbId: 'i7JKWYHwDCb46axm3GOOWOaqcVs2',
    name: 'Asher Feehan',
    initials: 'AF',
    email: 'afeehan@example.com',
    displayEmail: true,
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    tags: [],
    aboutMe:
      'Hi! My name is Asher, I’m a creative geek from Australia. I enjoy creating eye candy art for commercial and residential structures.',
    moreInfo: 'asherfeehan.com',
    profilePhotoUrl: [
      `${process.env.CLOUD_UPLOAD_URL}/v1631822180/profile/ovexv2t2gzer1yekklwf.png`,
    ],
  },
];

export default artists;
