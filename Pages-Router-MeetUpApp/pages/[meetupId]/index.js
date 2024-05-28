import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://cdn.mos.cms.futurecdn.net/5WUroWJ3ECE9pk9vBhXiqP-1200-80.png"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
  );
}
export async function getStaticPaths() {
  return {
    paths: [{ params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } }],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://cdn.mos.cms.futurecdn.net/5WUroWJ3ECE9pk9vBhXiqP-1200-80.png',
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup',
      },
    },
  };
}
