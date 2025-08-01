# 🎬 SAFS Taxonomy System Implementation

## Overview

This document outlines the comprehensive taxonomy system implemented for the St. Augustine Film Society (SAFS). The system provides structured categorization for films, people, venues, and collections while maintaining TMDB integration and SAFS-specific features.

## 📋 Schema Architecture

### **Taxonomy Schemas** (Core Categorization)

#### 1. **Genre** (`src/schemas/taxonomy/genre.ts`)

- **Purpose**: Film genre classification with hierarchical support
- **Key Features**:
  - Parent-child relationships (e.g., "Film Noir" under "Drama")
  - TMDB ID integration for API sync
  - SAFS color palette assignment
  - Display ordering
- **Example Usage**: Drama > Film Noir, Comedy > Screwball Comedy

#### 2. **Film Tag** (`src/schemas/taxonomy/filmTag.ts`)

- **Purpose**: Flexible tagging system for films
- **Categories**:
  - Era/Decade (1940s, Silent Era)
  - Film Style (Documentary, Experimental)
  - Theme/Subject (Coming of Age, War)
  - Awards/Recognition (Oscar Winner, Cannes)
  - Special Collection (SAFS Favorites)
  - Cultural Origin (French New Wave, Italian Neorealism)
  - Technical Aspect (Black & White, Widescreen)
  - Screening Format (35mm, Digital 4K)
  - Audience (Family-Friendly, Mature Themes)
  - Festival Circuit (Sundance, Local Festivals)
  - Educational (Film Studies, Historical Context)

#### 3. **Collection** (`src/schemas/taxonomy/collection.ts`)

- **Purpose**: Curated film collections and series
- **Types**:
  - Retrospective
  - Film Festival
  - Director Spotlight
  - Genre Series
  - Seasonal
  - Educational
  - Community Choice
  - Anniversary Series
  - Local Filmmaker

### **Enhanced Content Schemas**

#### 4. **Enhanced Film** (`src/schemas/content/enhancedFilm.ts`)

- **Purpose**: Comprehensive film records with full taxonomy integration
- **Key Features**:
  - Full taxonomy references (genres, tags, collections)
  - Detailed cast/crew with character names and billing order
  - SAFS-specific curator notes and discussion guides
  - Technical format preferences
  - Custom image overrides for TMDB data

#### 5. **Enhanced Screening** (`src/schemas/content/enhancedScreening.ts`)

- **Purpose**: Detailed screening events with comprehensive metadata
- **Key Features**:
  - Flexible ticket pricing (general, member, student, senior)
  - Screening types (regular, opening night, fundraiser, etc.)
  - Technical details (format, audio, subtitles)
  - Guest appearances and special events
  - Post-event analytics and feedback

## 🎨 SAFS Color Palette Integration

All taxonomy items support SAFS brand colors:

- **Terracotta** (`#D2691E`)
- **Ocean Blue** (`#006994`)
- **Ochre** (`#CC8500`)
- **Sandstone** (`#F5E6D3`)
- **Charcoal** (`#36454F`)

## 🔄 Migration Strategy

### Phase 1: Taxonomy Setup (Current)

1. ✅ Create taxonomy schemas (genre, filmTag, collection)
2. ✅ Integrate with existing person/venue schemas
3. ⏳ Populate initial taxonomy data in Sanity Studio

### Phase 2: Enhanced Schemas (Future)

1. Migrate existing films to enhanced film schema
2. Update screening data with enhanced schema
3. Build UI components for taxonomy filtering

### Phase 3: Frontend Integration

1. Create taxonomy-aware film filtering
2. Build collection pages
3. Implement tag-based search
4. Create genre-specific landing pages

## 🛠️ Implementation Examples

### Adding a New Genre

```javascript
// In Sanity Studio
{
  name: "Film Noir",
  slug: "film-noir",
  description: "Dark, cynical films with shadowy cinematography",
  parentGenre: "Drama", // Reference to Drama genre
  displayColor: "charcoal",
  order: 5
}
```

### Creating a Film Collection

```javascript
// "Hitchcock Retrospective" Collection
{
  name: "Alfred Hitchcock: Master of Suspense",
  collectionType: "director-spotlight",
  curatedBy: "SAFS Programming Committee",
  featuredFilms: [
    "Vertigo",
    "Psycho",
    "North by Northwest"
  ],
  displayColor: "ocean-blue"
}
```

### Tagging a Film

```javascript
// Film with comprehensive taxonomy
{
  title: "Casablanca",
  genres: ["Drama", "Romance"],
  tags: [
    "1940s",           // Era
    "War",             // Theme
    "Oscar Winner",    // Award
    "Black & White",   // Technical
    "Classic Hollywood" // Style
  ],
  collections: ["SAFS Essential Cinema"]
}
```

## 🎯 Benefits of This System

### **For Content Managers**

- Consistent categorization across all content
- Easy bulk updates and content curation
- Rich metadata for better organization

### **For Website Visitors**

- Advanced filtering and search capabilities
- Discoverable related content
- Curated film collections and recommendations

### **For SAFS Organization**

- Better event planning and programming
- Detailed analytics on content preferences
- Professional presentation of film information

## 📊 Analytics & Reporting Potential

The taxonomy system enables powerful analytics:

- Most popular genres among members
- Collection engagement metrics
- Tag-based content recommendations
- Venue-specific programming insights
- Guest appearance effectiveness

## 🔧 Technical Integration

### Frontend Usage

```typescript
// Example: Filter films by genre
const dramaFilms = await client.fetch(`
  *[_type == "enhancedFilm" && 
    references(*[_type == "genre" && name == "Drama"]._id)]
`);

// Example: Get collection films
const hitchcockFilms = await client.fetch(`
  *[_type == "enhancedFilm" && 
    references(*[_type == "collection" && 
    name match "Hitchcock*"]._id)]
`);
```

### Sanity Studio Organization

The schemas are organized for optimal editing experience:

- Grouped by function (taxonomy vs. content)
- Logical field ordering
- Helpful descriptions and validation
- Smart preview formatting

## 🚀 Next Steps

1. **Populate Taxonomy Data**: Add initial genres, tags, and collections
2. **Migrate Content**: Update existing films with taxonomy references
3. **Build UI Components**: Create filtering and display components
4. **Test Integration**: Ensure TMDB sync works with taxonomy
5. **Launch**: Deploy enhanced taxonomy system

## 📝 Notes

- **Backward Compatibility**: Existing schemas remain functional
- **Gradual Migration**: Can migrate content incrementally
- **Extensible Design**: Easy to add new taxonomy types
- **SAFS Branding**: Integrated with organizational color palette and style

This taxonomy system transforms SAFS from a simple film listing to a comprehensive, searchable, and engaging film discovery platform that serves both the organization's curatorial needs and the community's film exploration interests.
