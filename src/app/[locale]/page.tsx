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
import LazyWrapper from '@/components/Shared/LazyWrapper';

// Loading components for better UX
const SectionSkeleton = ({ height = 'h-64' }: { height?: string }) => (
  <div className={`${height} bg-gray-100 animate-pulse rounded-lg`} />
);

export default function Home() {
  return (
    <>
      {/* Hero section - load immediately for LCP */}
      <HeroSection />

      {/* Lazy load non-critical sections */}
      <LazyWrapper fallback={<SectionSkeleton height='h-96' />}>
        <Article />
      </LazyWrapper>

      <LazyWrapper fallback={<SectionSkeleton height='h-80' />}>
        <Categories />
      </LazyWrapper>

      <LazyWrapper fallback={<SectionSkeleton height='h-96' />}>
        <LatestArticle />
      </LazyWrapper>

      <LazyWrapper fallback={<SectionSkeleton height='h-80' />}>
        <Foryou />
      </LazyWrapper>

      <LazyWrapper fallback={<SectionSkeleton height='h-96' />}>
        <Map />
      </LazyWrapper>

      <LazyWrapper fallback={<SectionSkeleton height='h-64' />}>
        <Newsletter />
      </LazyWrapper>

      {/* Fixed bottom icon - only visible on home page */}
      <FixedBottomIcon className='animate-pulse' />
    </>
  );
}
