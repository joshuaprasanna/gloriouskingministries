// src/components/ui/card.js

import React from 'react';

export function Card({ children, className }) {
  return <div className={`rounded-2xl shadow-md p-4 bg-white ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}
