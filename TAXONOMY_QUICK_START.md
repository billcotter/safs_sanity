# 🎬 SAFS Taxonomy Quick Start Guide

## 🚀 Getting Started

### Step 1: Start Sanity Studio

```bash
cd /Users/bill/Sandbox/next/safs
pnpm run dev
```

Visit your Sanity Studio at the studio URL (usually `localhost:3000/studio`)

### Step 2: Create Initial Taxonomy Data

#### A. Create Basic Genres

Navigate to **Genre** in Sanity Studio and create these essential genres:

```
1. Drama
   - Slug: drama
   - Color: Ocean Blue
   - Order: 1

2. Comedy
   - Slug: comedy
   - Color: Ochre
   - Order: 2

3. Documentary
   - Slug: documentary
   - Color: Terracotta
   - Order: 3

4. International
   - Slug: international
   - Color: Sandstone
   - Order: 4

5. Classic Cinema
   - Slug: classic-cinema
   - Color: Charcoal
   - Order: 5
```

#### B. Create Sub-Genres (Optional)

```
Film Noir
- Parent Genre: Drama
- Color: Charcoal

Screwball Comedy
- Parent Genre: Comedy
- Color: Ochre
```

#### C. Create Essential Film Tags

Navigate to **Film Tag** and create:

```
Era Tags:
- 1920s (Era) - Sandstone
- 1940s (Era) - Charcoal
- 1960s (Era) - Ocean Blue
- Modern (Era) - Terracotta

Style Tags:
- Black & White (Technical) - Charcoal
- Widescreen (Technical) - Ocean Blue
- Experimental (Style) - Ochre

Award Tags:
- Oscar Winner (Award) - Terracotta
- Cannes Winner (Award) - Ocean Blue
- SAFS Favorite (Collection) - Sandstone
```

#### D. Create Your First Collection

Navigate to **Collection**:

```
SAFS Essential Cinema
- Type: Community Choice
- Curated By: SAFS Programming Committee
- Color: Ocean Blue
- Description: Films every SAFS member should see
- Active: Yes
```

### Step 3: Update an Existing Film

1. Go to your existing **Film** documents
2. You'll now see new fields available for taxonomy
3. Add genre and tag references to your films

### Step 4: Test the Enhanced Schemas

Try creating a new **Enhanced Film** or **Enhanced Screening** to see the full taxonomy in action.

## 🎯 Practical Usage Examples

### Example 1: Categorizing "Casablanca"

```
Title: Casablanca
Genres: [Drama, Romance]
Tags: [1940s, War, Oscar Winner, Black & White, Classic Hollywood]
Collections: [SAFS Essential Cinema]
Curator Notes: "A perfect example of studio system filmmaking..."
```

### Example 2: Creating a Hitchcock Collection

```
Name: "Master of Suspense: Alfred Hitchcock"
Type: Director Spotlight
Curated By: "Film Studies Professor Jane Smith"
Featured Films: [Vertigo, Psycho, North by Northwest]
Start Date: 2024-10-01
End Date: 2024-12-31
```

### Example 3: Tagging a Documentary

```
Title: "The Act of Killing"
Genres: [Documentary, International]
Tags: [2010s, Indonesia, Cannes Winner, Political, Human Rights]
Format: Digital 4K
```

## 📋 Quick Reference

### SAFS Color Assignments

- **Terracotta**: Awards, Collections, Special Events
- **Ocean Blue**: Main genres, Primary collections
- **Ochre**: Comedy, Technical aspects, Style tags
- **Sandstone**: Era tags, International content
- **Charcoal**: Drama, Film Noir, Historical content

### Tag Categories

- **Era**: 1920s, 1940s, Silent Era, Modern
- **Style**: Documentary, Experimental, Animation
- **Theme**: War, Coming of Age, Political, Romance
- **Award**: Oscar Winner, Cannes, BAFTA, Local Awards
- **Technical**: 35mm, Black & White, Widescreen, Subtitled
- **Origin**: French New Wave, Italian Neorealism, Local
- **Format**: 35mm, Digital 4K, IMAX
- **Audience**: Family-Friendly, Mature, Art House

### Collection Types

- **Retrospective**: Career overviews, anniversary celebrations
- **Festival**: Recreating festival programs, touring shows
- **Director Spotlight**: Single director focus
- **Genre Series**: Horror month, comedy series
- **Seasonal**: Summer classics, holiday films
- **Educational**: Film history, technique focus
- **Community Choice**: Member-voted selections

## 🔧 Troubleshooting

### Issue: Can't see new taxonomy fields

- **Solution**: Make sure you've saved the schema changes and restarted your development server

### Issue: References not working

- **Solution**: Ensure the referenced documents (genres, tags) exist before trying to reference them

### Issue: Colors not displaying

- **Solution**: The colors are stored as values - you'll need to implement the color display in your frontend components

## 🎉 Success Indicators

You'll know the taxonomy is working when:

- ✅ You can create genres, tags, and collections in Sanity Studio
- ✅ Films can be tagged with multiple categories
- ✅ Collections can reference multiple films
- ✅ You can filter content by taxonomy
- ✅ Related content suggestions become possible

## 📈 What's Next?

After basic setup:

1. **Populate Content**: Add taxonomy to existing films
2. **Create Collections**: Build thematic film collections
3. **Frontend Integration**: Use taxonomy for filtering and recommendations
4. **Analytics**: Track popular genres and collections
5. **Automation**: Sync some taxonomy data with TMDB

## 💡 Pro Tips

- **Start Small**: Begin with 5-10 genres and tags, expand as needed
- **Be Consistent**: Use the same naming conventions
- **Think User-First**: Create categories that help visitors discover films
- **Regular Maintenance**: Review and update taxonomy quarterly
- **Community Input**: Ask SAFS members what categories they want

This taxonomy system will transform your film society website into a sophisticated, discoverable, and engaging platform for film lovers! 🎬
