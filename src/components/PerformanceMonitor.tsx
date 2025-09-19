'use client';

import { useMemoryUsage, usePerformance } from '@/hooks/usePerformance';
import { useEffect } from 'react';

export default function PerformanceMonitor() {
  const metrics = usePerformance();
  const memoryInfo = useMemoryUsage();

  // Only show in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      try {
        console.group('🚀 Performance Metrics');
        console.log('Core Web Vitals:', metrics);
        console.log('Memory Usage:', memoryInfo);
        console.groupEnd();
      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    }
  }, [metrics, memoryInfo]);

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className='fixed bottom-4 left-4 bg-black text-white p-2 rounded text-xs font-mono z-50'>
      <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
      <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
      <div>FID: {metrics.fid?.toFixed(2)}ms</div>
      <div>CLS: {metrics.cls?.toFixed(4)}</div>
      {memoryInfo && <div>Memory: {(memoryInfo.usedJSHeapSize / 1024 / 1024).toFixed(1)}MB</div>}
    </div>
  );
}
