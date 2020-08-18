import { SkipNavContent } from '@reach/skip-nav';
import Page from '@components/page';
import { ORG_NAME } from '@lib/constants';
import SocialMeta from '@components/social-meta';
import ConfContent from '@components/conf';

export default function Ticket() {
  return (
    <Page title="Next.js Conf" hideHeader>
      <SocialMeta
        image="/static/twitter-cards/home.jpg"
        title={`Next.js by ${ORG_NAME} - The React Framework`}
        url="https://nextjs.org"
        description={`Production grade React applications that scale. The world’s leading companies use Next.js by ${ORG_NAME} to build static and dynamic websites and web applications.`}
      />
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          id: 'e9bb985f0cfb0721ffc3f100411765c9af9a7fa1',
          ticketNumber: 1
        }}
        defaultPageState="ticket"
      />
    </Page>
  );
}
