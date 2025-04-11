/**
 * Utility functions for the CGPA Calculator application
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines multiple class values and merges Tailwind classes
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a GPA value to a string with 2 decimal places
 */
export function formatGPA(gpa: number): string {
  return gpa.toFixed(2)
}

/**
 * Gets classification label based on GPA value
 */
export function getGPAClassification(gpa: number): string {
  if (gpa >= 3.80) return 'A+ (Outstanding)'
  if (gpa >= 3.50) return 'A (Excellent)'
  if (gpa >= 3.25) return 'A- (Very Good)'
  if (gpa >= 3.00) return 'B+ (Good)'
  if (gpa >= 2.75) return 'B (Satisfactory)'
  if (gpa >= 2.50) return 'B- (Above Average)'
  if (gpa >= 2.25) return 'C+ (Average)'
  if (gpa >= 2.00) return 'C (Below Average)'
  if (gpa > 0) return 'D (Pass)'
  return 'F (Fail)'
}

/**
 * Debounce function to limit how often a function can be called
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>): void {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

/**
 * Check if the device is in dark mode
 */
export function prefersDarkMode(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Check if device is touch-enabled
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/**
 * Check if app is running as a PWA (in standalone mode)
 */
export function isRunningAsPWA(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true
}

/**
 * Generate a unique ID (for accessibility purposes)
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`
}
