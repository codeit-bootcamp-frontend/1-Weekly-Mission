import React from 'react';
import './LandingSection.css';

export function LandingSectionTemplate({ children, sectionName }) {
  return <section className={sectionName}>{children}</section>;
}
