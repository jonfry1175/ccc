# Christianity Crisis Center Website Color Scheme Migration Plan

## 📋 Project Overview

Migrate the current maritime-themed color scheme to a new color palette based on the Christianity Crisis Center logo to ensure authentic brand consistency.

## 🎨 Current vs New Color Mapping

### Current Color Scheme (Maritime Theme)

```
color1: #20386D (Dark Blue - Navy)
color2: #4F9EE1 (Light Blue)
color3: #4791A6 (Teal)
color4: #AAA295 (Gold/Beige)
gold: #AAA295 (Primary Gold)
textColor: #BEBFC0 (Light Gray)
navy: #010033 (Dark Navy)
```

### New Color Scheme (Logo-Based)

```
Primary Red: #E31E24 (Main logo red)
Secondary Red: #DC143C (Darker red variant)
Primary Gold: #D4AF37 (Cross gold color)
Light Gold: #FFD700 (Gold highlights)
Primary White: #FFFFFF (Clean backgrounds)
Off White: #F8F8FF (Soft backgrounds)
Dark Gray: #2B2B2B (Primary text)
Black: #1A1A1A (Emphasis text)
Light Gray: #F5F5F5 (Secondary backgrounds)
```

## 🔄 Color Migration Mapping

```
OLD → NEW
color1 (#20386D) → Primary Red (#E31E24)
color2 (#4F9EE1) → Secondary Red (#DC143C)
color3 (#4791A6) → Primary Gold (#D4AF37)
color4 (#AAA295) → Light Gold (#FFD700)
gold (#AAA295) → Primary Gold (#D4AF37)
textColor (#BEBFC0) → Dark Gray (#2B2B2B)
```

## 📁 Files to Update

### 1. Configuration Files

- `tailwind.config.ts` - Update color definitions
- `src/app/globals.css` - Update CSS custom properties and HSL values

### 2. Component Files with Color Usage

- `src/components/atoms/Navbar/index.tsx` - Uses `bg-gold`, `text-color1`
- `src/app/(main)/home-page-client.tsx` - Uses `hover:bg-gold`, `hover:text-color1`
- `src/components/atoms/GalleryImageCard/index.tsx` - Uses `text-color1`
- `src/components/ui/input.tsx` - Uses `text-color1`, `placeholder:text-color1`
- `src/components/molecules/Homepage/Certified/index.tsx` - Uses `bg-gold`, `text-color1`
- `src/components/molecules/Homepage/Testimonial/index.tsx` - Uses `bg-gold`
- `src/components/molecules/Homepage/About/index.tsx` - Uses `border-gold`, `bg-gold`, `bg-color1`, `text-color1`

## 🛠 Implementation Tasks

### Task 1: Update Tailwind Configuration

**File**: `tailwind.config.ts`

- Replace `color1-4` definitions with new red/gold palette
- Update `gold` color variants
- Add new color variants (light, dark) for each primary color
- Update `primary` color HSL values

### Task 2: Update CSS Variables

**File**: `src/app/globals.css`

- Update `:root` CSS custom properties for light mode
- Update `.dark` CSS custom properties for dark mode
- Ensure proper HSL format conversion
- Maintain accessibility contrast ratios

### Task 3: Component Color Updates

**Strategy**: Search and replace color class usage

- `bg-gold` → `bg-primary-gold`
- `text-color1` → `text-primary-red`
- `border-color1` → `border-primary-red`
- `hover:bg-gold` → `hover:bg-primary-gold`
- `hover:text-color1` → `hover:text-primary-red`

### Task 4: Brand Consistency Check

- Verify navbar styling matches logo colors
- Ensure button states use appropriate red/gold combinations
- Check card borders and backgrounds
- Validate icon colors
- Test text readability and contrast

### Task 5: Accessibility Validation

- Verify color contrast ratios meet WCAG standards
- Test color combinations for readability
- Ensure focus states remain visible
- Validate dark mode color combinations

## 🎯 Expected Outcomes

### Visual Changes

- Navbar: Gold background with red text/icons
- Buttons: Red primary with gold accents
- Cards: White backgrounds with red borders
- Text: Dark gray for optimal readability
- Accents: Gold highlights throughout

### Brand Benefits

- ✅ Authentic Christianity Crisis Center branding
- ✅ Religious symbolism (red = sacrifice, gold = divine)
- ✅ Professional and memorable appearance
- ✅ Consistent visual identity
- ✅ Better brand recognition

## 📋 Testing Checklist

- [ ] Color contrast meets accessibility standards
- [ ] All components render correctly with new colors
- [ ] Dark mode functionality preserved
- [ ] Logo integration looks natural
- [ ] Mobile responsiveness maintained
- [ ] Cross-browser compatibility verified

## 🔍 Quality Assurance

1. Compare before/after screenshots
2. Verify color consistency across all pages
3. Test hover and focus states
4. Validate form elements styling
5. Ensure proper color hierarchy

## 🎨 Detailed Color Specifications

### Tailwind Config Updates

```typescript
colors: {
  // New Christianity Crisis Center Colors
  primaryRed: "#E31E24",
  secondaryRed: "#DC143C",
  primaryGold: "#D4AF37",
  lightGold: "#FFD700",

  // Supporting Colors
  primaryWhite: "#FFFFFF",
  offWhite: "#F8F8FF",
  darkGray: "#2B2B2B",
  textBlack: "#1A1A1A",
  lightGray: "#F5F5F5",

  // Legacy mapping for backward compatibility
  color1: "#E31E24", // Was #20386D
  color2: "#DC143C", // Was #4F9EE1
  color3: "#D4AF37", // Was #4791A6
  color4: "#FFD700", // Was #AAA295
  gold: {
    DEFAULT: "#D4AF37",
    light: "#FFD700",
    dark: "#B8860B"
  },
  textColor: "#2B2B2B", // Was #BEBFC0
}
```

### CSS Variables (HSL Format)

```css
:root {
  --primary-red: 358 85% 52%; /* #E31E24 */
  --secondary-red: 348 79% 47%; /* #DC143C */
  --primary-gold: 43 69% 49%; /* #D4AF37 */
  --light-gold: 51 100% 50%; /* #FFD700 */
  --dark-gray: 0 0% 17%; /* #2B2B2B */
  --text-black: 0 0% 10%; /* #1A1A1A */
}
```

## 📝 Implementation Notes

### Priority Order

1. **High Priority**: Navbar, buttons, primary CTAs
2. **Medium Priority**: Cards, sections, backgrounds
3. **Low Priority**: Subtle accents, borders, shadows

### Color Psychology

- **Red (#E31E24)**: Passion, sacrifice, urgency, love
- **Gold (#D4AF37)**: Divine, sacred, precious, wisdom
- **White (#FFFFFF)**: Purity, peace, clarity, hope
- **Dark Gray (#2B2B2B)**: Stability, professionalism, readability

### Brand Consistency Guidelines

- Use red for primary actions and important elements
- Use gold for accents, highlights, and sacred elements
- Maintain white space for clarity and breathing room
- Ensure dark gray text for optimal readability

---

**Project**: Christianity Crisis Center Website Redesign  
**Focus**: Logo-based color scheme migration  
**Goal**: Authentic brand representation through visual consistency  
**Timeline**: Immediate implementation recommended for brand alignment
