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
export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
