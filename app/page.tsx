import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '../src/components/widgets/SocialProof';
import Content from '~/components/widgets/Content';
import FAQs2 from '~/components/widgets/FAQs2';
import {

  content2Data,
  contentData,
  faqsData2,

  heroData,
  socialProofData,
} from '~/shared/data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero data={heroData} />
      <Content {...contentData} />
      
  

    </>
  );
}
