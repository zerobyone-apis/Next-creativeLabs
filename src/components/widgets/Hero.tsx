import { CallToAction, HeroProps } from '~/shared/types';

const Hero = (props: { data: HeroProps }) => {
  const { title, subtitle, callToAction, callToAction2, image } = props.data;

  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
   
      </div>
    </section>
  );
};

export default Hero;
