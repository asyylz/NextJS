import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://cdn.mos.cms.futurecdn.net/5WUroWJ3ECE9pk9vBhXiqP-1200-80.png',
    adress: 'Some address 1',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://cdn.mos.cms.futurecdn.net/5WUroWJ3ECE9pk9vBhXiqP-1200-80.png',
    adress: 'Some address 2',
  },
];
export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// SSG

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
