import { describe, it, expect } from 'vitest';
import { getAllPosts } from '@/lib/blog';

describe('Blog Content Validation', () => {
  const posts = getAllPosts();

  describe('BLOG-01: Storm Damage & Hurricane Prep Content', () => {
    it('should have at least 1 post with category "Storm Damage"', () => {
      const stormPosts = posts.filter((post) => post.category === 'Storm Damage');

      expect(
        stormPosts.length,
        'Should have at least 1 post with category "Storm Damage"'
      ).toBeGreaterThanOrEqual(1);
    });

    it('should have at least 1 post with hurricane preparation content', () => {
      const hurricanePrepPosts = posts.filter((post) =>
        post.tags?.some((tag) =>
          tag.toLowerCase().includes('hurricane prep') ||
          tag.toLowerCase().includes('hurricane season preparation')
        )
      );

      expect(
        hurricanePrepPosts.length,
        'Should have at least 1 post with hurricane prep tags'
      ).toBeGreaterThanOrEqual(1);
    });
  });

  describe('BLOG-02: Insurance Claims Content', () => {
    it('should have at least 1 post with category "Insurance Claims"', () => {
      const insurancePosts = posts.filter((post) => post.category === 'Insurance Claims');

      expect(
        insurancePosts.length,
        'Should have at least 1 post with category "Insurance Claims"'
      ).toBeGreaterThanOrEqual(1);
    });

    it('should have Insurance Claims post with NC-specific references', () => {
      const insurancePosts = posts.filter((post) => post.category === 'Insurance Claims');

      if (insurancePosts.length === 0) {
        expect.fail('No Insurance Claims posts found');
      }

      const hasNcReferences = insurancePosts.some((post) => {
        const content = post.content.toLowerCase();
        return (
          content.includes('nc department of insurance') ||
          content.includes('hurricane deductible') ||
          content.includes('beach plan') ||
          content.includes('ncdoi')
        );
      });

      expect(
        hasNcReferences,
        'At least 1 Insurance Claims post should contain NC-specific insurance references'
      ).toBe(true);
    });
  });

  describe('BLOG-03: Educational Content', () => {
    it('should have at least 1 post with maintenance tags', () => {
      const maintenancePosts = posts.filter((post) =>
        post.tags?.some((tag) => tag.toLowerCase().includes('maintenance'))
      );

      expect(
        maintenancePosts.length,
        'Should have at least 1 post with maintenance tags'
      ).toBeGreaterThanOrEqual(1);
    });

    it('should have at least 1 post with material comparison tags', () => {
      const materialPosts = posts.filter((post) =>
        post.tags?.some((tag) => {
          const lowerTag = tag.toLowerCase();
          return lowerTag.includes('material') || lowerTag.includes('comparison');
        })
      );

      expect(
        materialPosts.length,
        'Should have at least 1 post with material comparison or roofing materials tags'
      ).toBeGreaterThanOrEqual(1);
    });
  });

  describe('BLOG-04: FORTIFIED Roofing Content', () => {
    it('should have at least 1 post with FORTIFIED category or tags', () => {
      const fortifiedPosts = posts.filter((post) =>
        post.category === 'FORTIFIED Roofing' ||
        post.tags?.some((tag) => tag.toLowerCase().includes('fortified'))
      );

      expect(
        fortifiedPosts.length,
        'Should have at least 1 post with category "FORTIFIED Roofing" or tags containing "fortified"'
      ).toBeGreaterThanOrEqual(1);
    });
  });

  describe('BLOG-05: Seasonal & Coastal Maintenance', () => {
    it('should have at least 1 post with hurricane season tags', () => {
      const seasonalPosts = posts.filter((post) =>
        post.tags?.some((tag) => {
          const lowerTag = tag.toLowerCase();
          return lowerTag.includes('hurricane season') || lowerTag.includes('hurricane prep');
        })
      );

      expect(
        seasonalPosts.length,
        'Should have at least 1 post with hurricane season or hurricane prep tags'
      ).toBeGreaterThanOrEqual(1);
    });

    it('should have at least 1 post with coastal maintenance tags', () => {
      const coastalPosts = posts.filter((post) =>
        post.tags?.some((tag) => {
          const lowerTag = tag.toLowerCase();
          return lowerTag.includes('salt air') || lowerTag.includes('coastal maintenance');
        })
      );

      expect(
        coastalPosts.length,
        'Should have at least 1 post with salt air or coastal maintenance tags'
      ).toBeGreaterThanOrEqual(1);
    });
  });

  describe('BLOG-06: Bidirectional Links', () => {
    it('should have every post contain at least 1 link to /services/*', () => {
      const servicesLinkPattern = /\/services\/[\w-]+/;

      posts.forEach((post) => {
        const hasServicesLink = servicesLinkPattern.test(post.content);

        expect(
          hasServicesLink,
          `Post "${post.title}" should contain at least 1 link to /services/*`
        ).toBe(true);
      });
    });

    it('should have every post contain at least 1 link to /estimate', () => {
      const estimateLinkPattern = /\/estimate/;

      posts.forEach((post) => {
        const hasEstimateLink = estimateLinkPattern.test(post.content);

        expect(
          hasEstimateLink,
          `Post "${post.title}" should contain at least 1 link to /estimate`
        ).toBe(true);
      });
    });
  });

  describe('Frontmatter Validation', () => {
    it('should have title between 50-70 characters', () => {
      posts.forEach((post) => {
        const titleLength = post.title.length;

        expect(
          titleLength,
          `Post "${post.title}" title should be 50-70 chars (found ${titleLength})`
        ).toBeGreaterThanOrEqual(50);

        expect(
          titleLength,
          `Post "${post.title}" title should be 50-70 chars (found ${titleLength})`
        ).toBeLessThanOrEqual(70);
      });
    });

    it('should have description between 100-160 characters', () => {
      posts.forEach((post) => {
        const descLength = post.description.length;

        expect(
          descLength,
          `Post "${post.title}" description should be 100-160 chars (found ${descLength})`
        ).toBeGreaterThanOrEqual(100);

        expect(
          descLength,
          `Post "${post.title}" description should be 100-160 chars (found ${descLength})`
        ).toBeLessThanOrEqual(160);
      });
    });

    it('should have valid ISO date format', () => {
      const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;

      posts.forEach((post) => {
        expect(
          isoDatePattern.test(post.date),
          `Post "${post.title}" date should match ISO format YYYY-MM-DD (found "${post.date}")`
        ).toBe(true);
      });
    });

    it('should have author as "Brett, Breeze Roofing"', () => {
      posts.forEach((post) => {
        expect(
          post.author,
          `Post "${post.title}" author should be "Brett, Breeze Roofing" (found "${post.author}")`
        ).toBe('Brett, Breeze Roofing');
      });
    });

    it('should have an approved category', () => {
      const approvedCategories = [
        'Storm Damage',
        'Insurance Claims',
        'FORTIFIED Roofing',
        'Roof Maintenance',
        'Roofing Materials',
        'Coastal Roofing',
        'Home Improvement',
      ];

      posts.forEach((post) => {
        expect(
          post.category,
          `Post "${post.title}" should have a category`
        ).toBeDefined();

        expect(
          approvedCategories,
          `Post "${post.title}" category "${post.category}" should be one of approved categories`
        ).toContain(post.category);
      });
    });

    it('should have 4-8 tags', () => {
      posts.forEach((post) => {
        expect(
          post.tags,
          `Post "${post.title}" should have tags array`
        ).toBeDefined();

        const tagCount = post.tags!.length;

        expect(
          tagCount,
          `Post "${post.title}" should have 4-8 tags (found ${tagCount})`
        ).toBeGreaterThanOrEqual(4);

        expect(
          tagCount,
          `Post "${post.title}" should have 4-8 tags (found ${tagCount})`
        ).toBeLessThanOrEqual(8);
      });
    });
  });

  describe('Word Count', () => {
    it('should have 1500+ words for commercial-intent categories', () => {
      const commercialCategories = ['Storm Damage', 'Insurance Claims', 'FORTIFIED Roofing'];

      posts.forEach((post) => {
        if (post.category && commercialCategories.includes(post.category)) {
          const wordCount = post.content.trim().split(/\s+/).length;

          expect(
            wordCount,
            `Post "${post.title}" with category "${post.category}" should have 1500+ words (found ${wordCount})`
          ).toBeGreaterThanOrEqual(1500);
        }
      });
    });
  });
});
