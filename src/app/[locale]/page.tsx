import {
  Article,
  Categories,
  FixedBottomIcon,
  Foryou,
  HeroSection,
  LatestArticle,
  Map,
  Newsletter,
} from '@/components';

export default function Home() {
  return (
    <>
      {/* <AiSection /> */}
      <HeroSection />
      <Article />
      <Categories />
      <LatestArticle />
      <Foryou />
      <Map />
      <Newsletter />

      {/* Fixed bottom icon - only visible on home page */}
      <FixedBottomIcon className='animate-pulse' />
    </>
  );
}
