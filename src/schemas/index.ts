// Existing schemas
import film from './film';
import screening from './screening';
import blog from './blog';

// Import existing sanity schemas
import person from '../sanity/schemaTypes/person';
import venue from '../sanity/schemaTypes/venue';
import member from '../sanity/schemaTypes/member';
import page from '../sanity/schemaTypes/page';
import ticket from '../sanity/schemaTypes/ticket';
import showing from '../sanity/schemaTypes/showing';

// New taxonomy schemas
import genre from './taxonomy/genre';
import filmTag from './taxonomy/filmTag';
import collection from './taxonomy/collection';

// Enhanced content schemas
import enhancedFilm from './content/enhancedFilm';
import enhancedScreening from './content/enhancedScreening';

export const schemaTypes = [
  // Core content types
  page,
  film,
  screening,
  blog,

  // People & Places
  person,
  venue,
  member,

  // Tickets & Events
  ticket,
  showing,

  // New taxonomy schemas
  genre,
  filmTag,
  collection,

  // Enhanced content schemas (for future migration)
  enhancedFilm,
  enhancedScreening,
];
