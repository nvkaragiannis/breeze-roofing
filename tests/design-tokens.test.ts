import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Design Tokens', () => {
  const globalsCSS = readFileSync(
    join(__dirname, '..', 'app', 'globals.css'),
    'utf-8'
  );

  it('should contain all required color tokens in @theme block', () => {
    // Color tokens
    expect(globalsCSS).toContain('--color-navy');
    expect(globalsCSS).toContain('--color-sky');
    expect(globalsCSS).toContain('--color-amber');
    expect(globalsCSS).toContain('--color-emergency');
    expect(globalsCSS).toContain('--color-success');

    // Gray scale
    expect(globalsCSS).toContain('--color-gray-50');
    expect(globalsCSS).toContain('--color-gray-100');
    expect(globalsCSS).toContain('--color-gray-300');
    expect(globalsCSS).toContain('--color-gray-600');
    expect(globalsCSS).toContain('--color-gray-800');
    expect(globalsCSS).toContain('--color-gray-900');
  });

  it('should contain animation tokens in @theme block', () => {
    expect(globalsCSS).toContain('--animate-breeze-in');
    expect(globalsCSS).toContain('--animate-fade-in');
    expect(globalsCSS).toContain('--animate-slide-up');
  });

  it('should contain keyframes for brand animations', () => {
    expect(globalsCSS).toContain('@keyframes breeze-in');
    expect(globalsCSS).toContain('@keyframes fade-in');
    expect(globalsCSS).toContain('@keyframes slide-up');
  });

  it('should document motion-safe usage for animations', () => {
    // Check for motion-safe or motion-reduce documentation
    const hasMotionDocumentation =
      globalsCSS.includes('motion-safe') ||
      globalsCSS.includes('motion-reduce');

    expect(hasMotionDocumentation).toBe(true);
  });
});
