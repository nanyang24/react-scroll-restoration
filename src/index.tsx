import React, { useRef } from 'react';
import ScrollRestoration from './scroll-restoration';

export default function Wrapper() {
  const visitedUrl = useRef(new Map());

  return <ScrollRestoration visitedUrl={visitedUrl.current} />;
}
