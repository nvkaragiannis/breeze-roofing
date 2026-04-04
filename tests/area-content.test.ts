import { describe, it, expect } from 'vitest';
import { areas } from '@/lib/data/areas';
import { services } from '@/lib/data/services';

// Valid blog slugs available for relatedBlogSlugs
const VALID_BLOG_SLUGS = [
  'best-roofing-materials-coastal-north-carolina',
  'fortified-roof-vs-regular-roof-comparison',
  'how-long-does-a-roof-last-coastal-nc',
  'how-much-does-a-new-roof-cost-wilmington-nc',
  'how-to-file-roof-insurance-claim-hurricane-nc',
  'signs-your-roof-has-storm-damage-wilmington',
  'what-is-ibhs-fortified-roof-nc-insurance-savings',
];

// Valid service slugs from services.ts
const VALID_SERVICE_SLUGS = services.map((s) => s.slug);

// Helper: Concatenate all text content fields from an area
function getAreaTextContent(area: typeof areas[0]): string {
  const parts: string[] = [
    area.intro,
    area.challenges,
    area.localContext?.geographicPosition || '',
    area.localContext?.buildingCharacteristics || '',
    area.localContext?.communityProfile || '',
    area.coastalFactors?.hurricaneHistory || '',
    area.coastalFactors?.buildingConsiderations || '',
    area.featuredProjectDescription || '',
  ];

  return parts.filter((p) => p.trim().length > 0).join(' ');
}

// Helper: Count words in text
function countWords(text: string): number {
  return text.trim().split(/\s+/).length;
}

// Helper: Calculate Jaccard similarity between two text strings
function calculateJaccardSimilarity(text1: string, text2: string): number {
  const words1 = new Set(
    text1.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
  );
  const words2 = new Set(
    text2.toLowerCase().split(/\s+/).filter((w) => w.length > 3)
  );

  const intersection = new Set([...words1].filter((w) => words2.has(w)));
  const union = new Set([...words1, ...words2]);

  if (union.size === 0) return 0;
  return intersection.size / union.size;
}

describe('Area Content Validation', () => {
  describe('AREA-01: Word Count and Uniqueness', () => {
    it('should have at least 500 words of content per area', () => {
      areas.forEach((area) => {
        const content = getAreaTextContent(area);
        const wordCount = countWords(content);

        expect(wordCount, `${area.city} should have at least 500 words (found ${wordCount})`).toBeGreaterThanOrEqual(500);
      });
    });

    it('should have unique content across all areas (less than 30% overlap)', () => {
      for (let i = 0; i < areas.length; i++) {
        for (let j = i + 1; j < areas.length; j++) {
          const area1 = areas[i];
          const area2 = areas[j];

          const content1 = getAreaTextContent(area1);
          const content2 = getAreaTextContent(area2);

          const similarity = calculateJaccardSimilarity(content1, content2);

          expect(
            similarity,
            `${area1.city} and ${area2.city} share ${(similarity * 100).toFixed(1)}% content overlap (should be < 30%)`
          ).toBeLessThan(0.30);
        }
      }
    });
  });

  describe('AREA-02: Local Context', () => {
    it('should have localContext with at least 1 landmark', () => {
      areas.forEach((area) => {
        expect(
          area.localContext,
          `${area.city} should have localContext defined`
        ).toBeDefined();

        expect(
          area.localContext?.landmarks,
          `${area.city} should have landmarks array`
        ).toBeDefined();

        expect(
          area.localContext!.landmarks.length,
          `${area.city} should have at least 1 landmark`
        ).toBeGreaterThanOrEqual(1);
      });
    });

    it('should have non-empty buildingCharacteristics', () => {
      areas.forEach((area) => {
        expect(
          area.localContext?.buildingCharacteristics,
          `${area.city} should have buildingCharacteristics`
        ).toBeDefined();

        expect(
          area.localContext!.buildingCharacteristics.trim().length,
          `${area.city} buildingCharacteristics should not be empty`
        ).toBeGreaterThan(0);
      });
    });

    it('should have non-empty geographicPosition', () => {
      areas.forEach((area) => {
        expect(
          area.localContext?.geographicPosition,
          `${area.city} should have geographicPosition`
        ).toBeDefined();

        expect(
          area.localContext!.geographicPosition.trim().length,
          `${area.city} geographicPosition should not be empty`
        ).toBeGreaterThan(0);
      });
    });

    it('should have non-empty communityProfile', () => {
      areas.forEach((area) => {
        expect(
          area.localContext?.communityProfile,
          `${area.city} should have communityProfile`
        ).toBeDefined();

        expect(
          area.localContext!.communityProfile.trim().length,
          `${area.city} communityProfile should not be empty`
        ).toBeGreaterThan(0);
      });
    });
  });

  describe('AREA-03: Social Proof', () => {
    it('should have at least 2 areas with testimonialNames', () => {
      const areasWithTestimonials = areas.filter(
        (area) => area.testimonialNames && area.testimonialNames.length > 0
      );

      expect(
        areasWithTestimonials.length,
        'At least 2 areas should have testimonialNames'
      ).toBeGreaterThanOrEqual(2);
    });
  });

  describe('AREA-04: Coastal Factors', () => {
    it('should have coastalFactors with all required fields', () => {
      areas.forEach((area) => {
        expect(
          area.coastalFactors,
          `${area.city} should have coastalFactors defined`
        ).toBeDefined();

        const factors = area.coastalFactors!;

        expect(
          factors.windZone,
          `${area.city} should have windZone`
        ).toBeDefined();
        expect(
          factors.windZone.trim().length,
          `${area.city} windZone should not be empty`
        ).toBeGreaterThan(0);

        expect(
          factors.saltAirExposure,
          `${area.city} should have saltAirExposure`
        ).toBeDefined();
        expect(
          ['high', 'moderate', 'low'],
          `${area.city} saltAirExposure should be one of: high, moderate, low`
        ).toContain(factors.saltAirExposure);

        expect(
          factors.hurricaneHistory,
          `${area.city} should have hurricaneHistory`
        ).toBeDefined();
        expect(
          factors.hurricaneHistory.trim().length,
          `${area.city} hurricaneHistory should not be empty`
        ).toBeGreaterThan(0);

        expect(
          factors.buildingConsiderations,
          `${area.city} should have buildingConsiderations`
        ).toBeDefined();
        expect(
          factors.buildingConsiderations.trim().length,
          `${area.city} buildingConsiderations should not be empty`
        ).toBeGreaterThan(0);
      });
    });
  });

  describe('AREA-05: Internal Linking', () => {
    it('should have at least 1 relatedBlogSlug', () => {
      areas.forEach((area) => {
        expect(
          area.relatedBlogSlugs,
          `${area.city} should have relatedBlogSlugs defined`
        ).toBeDefined();

        expect(
          area.relatedBlogSlugs!.length,
          `${area.city} should have at least 1 relatedBlogSlug`
        ).toBeGreaterThanOrEqual(1);
      });
    });

    it('should have at least 1 priorityService', () => {
      areas.forEach((area) => {
        expect(
          area.priorityServices,
          `${area.city} should have priorityServices defined`
        ).toBeDefined();

        expect(
          area.priorityServices!.length,
          `${area.city} should have at least 1 priorityService`
        ).toBeGreaterThanOrEqual(1);
      });
    });

    it('should reference valid blog slugs', () => {
      areas.forEach((area) => {
        area.relatedBlogSlugs?.forEach((slug) => {
          expect(
            VALID_BLOG_SLUGS,
            `${area.city} references invalid blog slug: ${slug}`
          ).toContain(slug);
        });
      });
    });

    it('should reference valid service slugs', () => {
      areas.forEach((area) => {
        area.priorityServices?.forEach((slug) => {
          expect(
            VALID_SERVICE_SLUGS,
            `${area.city} references invalid service slug: ${slug}`
          ).toContain(slug);
        });
      });
    });
  });
});
