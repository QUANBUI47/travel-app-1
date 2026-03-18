import React from "react";
import { SvgXml } from "react-native-svg";

interface BrandLogoProps {
  size?: number;
  variant?: "light" | "dark";
}

const darkXml = `
<svg width="300" height="110" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(5, 5)">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#82bff0" stroke-width="3"></circle>
        <circle cx="50" cy="65" r="15" fill="#fcc219"></circle>
        <path d="M15 60 L50 20 L85 60" fill="none" stroke="#82bff0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M50 20 L30 60 M50 20 L40 60 M50 20 L60 60 M50 20 L70 60" stroke="#82bff0" stroke-width="1" opacity="0.4"></path>
        <path d="M15 60 Q50 68 85 60" fill="none" stroke="#82bff0" stroke-width="3"></path>
        <path d="M20 78 Q35 72 50 78 Q65 84 80 78" fill="none" stroke="#82bff0" stroke-width="2"></path>
        <path d="M20 88 Q35 82 50 88 Q65 94 80 88" fill="none" stroke="#82bff0" stroke-width="2"></path>
    </g>
    <text x="115" y="80" font-family="sans-serif" font-weight="700" font-size="72" fill="#F0F6FC" style="letter-spacing: -2px;">Vivu</text>
</svg>
`;

const lightXml = `
<svg width="300" height="110" viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(5, 5)">
        <circle cx="50" cy="50" r="48" fill="none" stroke="#0068c3" stroke-width="3"></circle>
        <circle cx="50" cy="65" r="15" fill="#fcc219"></circle>
        <path d="M15 60 L50 20 L85 60" fill="none" stroke="#0068c3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M50 20 L30 60 M50 20 L40 60 M50 20 L60 60 M50 20 L70 60" stroke="#0068c3" stroke-width="1" opacity="0.4"></path>
        <path d="M15 60 Q50 68 85 60" fill="none" stroke="#0068c3" stroke-width="3"></path>
        <path d="M20 78 Q35 72 50 78 Q65 84 80 78" fill="none" stroke="#0068c3" stroke-width="2"></path>
        <path d="M20 88 Q35 82 50 88 Q65 94 80 88" fill="none" stroke="#0068c3" stroke-width="2"></path>
    </g>
    <text x="115" y="80" font-family="sans-serif" font-weight="700" font-size="72" fill="#1A1A1A" style="letter-spacing: -2px;">Vivu</text>
</svg>
`;

export function BrandLogo({ size = 120, variant = "dark" }: BrandLogoProps) {
  const xml = variant === "dark" ? darkXml : lightXml;
  // Calculate height based on 300/110 ratio
  const height = (size * 110) / 300;
  return <SvgXml xml={xml} width={size} height={height} />;
}
