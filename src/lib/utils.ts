import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createMouseParallax(e: MouseEvent, target: HTMLElement, strength = 20) {
  const { width, height } = target.getBoundingClientRect();
  const offsetX = (e.clientX - width / 2) / width;
  const offsetY = (e.clientY - height / 2) / height;
  
  return {
    transform: `translate(${offsetX * strength}px, ${offsetY * strength}px)`,
  };
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}