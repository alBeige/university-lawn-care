# Image Attribution

This document lists all images used in the University Lawn Care website. All images are from royalty-free sources and are free for commercial use without attribution requirements.

## Unsplash Images Used

### Service Images (via Direct URLs)

These images are fetched directly from Unsplash CDN and automatically optimized by Next.js Image component:

1. **Lawn Mowing & Maintenance**
   - URL: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop&q=80`
   - Subject: Professional lawn care
   - License: Unsplash Free License

2. **Spring Cleanup**
   - URL: `https://images.unsplash.com/photo-1585314062340-f081b5a6e851?w=1200&h=400&fit=crop&q=80`
   - Subject: Spring garden preparation
   - License: Unsplash Free License

3. **Fall Cleanup**
   - URL: `https://images.unsplash.com/photo-1520763185298-1b434c919eba?w=1200&h=400&fit=crop&q=80`
   - Subject: Autumn leaves and cleanup
   - License: Unsplash Free License

4. **Core Aeration**
   - URL: `https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200&h=400&fit=crop&q=80`
   - Subject: Soil and grass
   - License: Unsplash Free License

5. **Dethatching**
   - URL: `https://images.unsplash.com/photo-1613489287602-8c04ae4706fd?w=1200&h=400&fit=crop&q=80`
   - Subject: Professional lawn maintenance
   - License: Unsplash Free License

6. **Overseeding**
   - URL: `https://images.unsplash.com/photo-1598281432032-5ddc31e17eaa?w=1200&h=400&fit=crop&q=80`
   - Subject: Grass seeds and lawn care
   - License: Unsplash Free License

7. **Fertilizing & Weed Control**
   - URL: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop&q=80`
   - Subject: Professional lawn care
   - License: Unsplash Free License

8. **Sod Installation**
   - URL: `https://images.unsplash.com/photo-1585420337529-c16989b91aa7?w=1200&h=400&fit=crop&q=80`
   - Subject: Fresh sod and lawn installation
   - License: Unsplash Free License

9. **Garden & Bed Maintenance**
   - URL: `https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=400&fit=crop&q=80`
   - Subject: Flowers and garden beds
   - License: Unsplash Free License

10. **Snow Removal**
    - URL: `https://images.unsplash.com/photo-1519663576427-f0ecd46dc5f9?w=1200&h=400&fit=crop&q=80`
    - Subject: Winter and snow removal
    - License: Unsplash Free License

### About Page Image

- **Equipment/Service Image**: Uses same lawn care image as Lawn Mowing service
- URL: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&q=80`
- License: Unsplash Free License

## SVG Patterns (Custom)

Created custom SVG patterns for backgrounds:

1. **pattern-dots.svg** (`/public/images/pattern-dots.svg`)
   - Subtle dot pattern used for backgrounds
   - Green gradient tones (#28a72d color family)
   - Custom design

2. **pattern-grass.svg** (`/public/images/pattern-grass.svg`)
   - Stylized grass blade pattern
   - Used for decorative backgrounds
   - Custom design

## Configuration

### Next.js Image Configuration

Remote patterns configured in `next.config.mjs`:
- Unsplash: `https://images.unsplash.com`
- Pexels: `https://images.pexels.com` (configured for future use)

### Image Optimization

- All remote images use Next.js Image component
- Automatic optimization via Next.js
- Responsive sizing with `fill` property
- Lazy loading enabled by default
- Quality parameter set to 80 for balance between quality and performance
- Fallback gradients in place if remote images fail to load

## Usage Throughout Site

### Homepage
- Service cards display hero images with 48px height preview
- Gradient fallback if image fails

### Service Pages
- Full-width hero section with service image as background (30% opacity behind gradient overlay)
- Inline image in "What's Included" section (bottom right)
- Responsive design with proper aspect ratios

### About Page
- Portrait-oriented image in "How We Got Started" section
- Fallback emoji + gradient if image fails

### Quote Form
- Subtle SVG dot pattern background
- Minimal visual distraction during form completion

## License Information

- **Unsplash License**: All Unsplash images are free for both commercial and non-commercial use. Attribution is appreciated but not required.
- **Pexels License**: Free for commercial and non-commercial use.
- **Custom SVG**: Entirely custom-designed for this project.

## Best Practices Implemented

✓ Direct stable URLs (not dynamic Unsplash redirects)
✓ Query parameters for optimization (width, height, quality)
✓ Next.js Image component for automatic optimization
✓ Fallback UI elements for failed image loads
✓ Lazy loading and responsive images
✓ No build-time image downloading
✓ Responsive sizing with proper aspect ratios
✓ Commercial-use friendly sources
✓ Performance optimized with proper sizing

