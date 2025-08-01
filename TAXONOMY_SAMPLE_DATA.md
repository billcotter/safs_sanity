# 🎬 SAFS Taxonomy System - Sample Data

## Sample Genre Data for Testing

Here are some sample entries you can create in Sanity Studio to test the new taxonomy system:

### Genres to Create:

1. **Drama**

   ```
   Name: Drama
   Slug: drama (auto-generated)
   Description: Serious films that explore complex themes and human relationships
   Display Color: Ocean Blue
   Order: 1
   ```

2. **Comedy**

   ```
   Name: Comedy
   Slug: comedy
   Description: Films intended to make audiences laugh
   Display Color: Ochre
   Order: 2
   ```

3. **Documentary**

   ```
   Name: Documentary
   Slug: documentary
   Description: Non-fiction films that document reality
   Display Color: Terracotta
   Order: 3
   ```

4. **Film Noir** (Sub-genre)
   ```
   Name: Film Noir
   Slug: film-noir
   Description: Dark, cynical films with shadowy cinematography
   Parent Genre: Drama (reference)
   Display Color: Charcoal
   Order: 4
   ```

### Film Tags to Create:

1. **1940s**

   ```
   Name: 1940s
   Category: Era/Decade
   Description: Films from the 1940s
   Display Color: Sandstone
   Is Featured: Yes
   ```

2. **Oscar Winner**

   ```
   Name: Oscar Winner
   Category: Awards/Recognition
   Description: Films that won Academy Awards
   Display Color: Terracotta
   Is Featured: Yes
   ```

3. **Black & White**

   ```
   Name: Black & White
   Category: Technical Aspect
   Description: Films shot in black and white
   Display Color: Charcoal
   ```

4. **SAFS Essential**
   ```
   Name: SAFS Essential
   Category: Special Collection
   Description: Must-see films for SAFS members
   Display Color: Ocean Blue
   Is Featured: Yes
   ```

### Collections to Create:

1. **Classic Hollywood**

   ```
   Name: Classic Hollywood Collection
   Slug: classic-hollywood
   Description: Essential films from Hollywood's Golden Age
   Collection Type: Retrospective
   Curated By: SAFS Programming Committee
   Display Color: Ocean Blue
   Is Active: Yes
   ```

2. **Director Spotlight: Alfred Hitchcock**
   ```
   Name: Master of Suspense: Alfred Hitchcock
   Slug: hitchcock-retrospective
   Description: A comprehensive look at the films of Alfred Hitchcock
   Collection Type: Director Spotlight
   Curated By: Film Studies Department
   Display Color: Charcoal
   Start Date: 2024-10-01
   End Date: 2024-12-31
   Is Active: Yes
   ```

## How to Test:

1. **Create Taxonomy Items**: Use the data above to create genres, tags, and collections
2. **Edit Existing Films**: Add genre and tag references to your existing films
3. **Create Enhanced Film**: Try creating a new "Enhanced Film" with full taxonomy
4. **Test Relationships**: Create a collection and reference films in it

## Expected Results:

- Sanity Studio should show new document types: Genre, Film Tag, Collection
- You should be able to create references between documents
- Preview text should show relationships (e.g., "Film Noir > Drama")
- Enhanced schemas should offer comprehensive categorization options

## Verification Steps:

1. ✅ Create a Genre → Should appear in Genre list
2. ✅ Create a Film Tag → Should appear in Film Tag list
3. ✅ Create a Collection → Should appear in Collection list
4. ✅ Edit a Film → Should see new taxonomy reference fields
5. ✅ Create Enhanced Film → Should see full taxonomy options

This sample data will give you a solid foundation to understand how the taxonomy system works and how it can enhance your film society's content organization! 🎬
