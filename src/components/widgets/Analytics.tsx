import { useVisibleTask$ } from '@builder.io/qwik';

export function useVercelAnalytics() {
  useVisibleTask$(() => {
    // Check if the analytics script is already present
    if (!document.getElementById('vercel-analytics')) {
      const script = document.createElement('script');
      script.id = 'vercel-analytics';
      script.src = 'https://vercel-analytics.com/script.js';
      script.async = true;
      document.head.appendChild(script);
    }
  });
}