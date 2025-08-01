'use client';

import { Breadcrumbs } from './Breadcrumbs';
import { PersonBanner } from './PersonBanner';
import { PersonBio } from './PersonBio';
import { PersonFilmography } from './PersonFilmography';

interface PersonDetailPageProps {
  person: any;
  tmdbData?: any;
}

export function PersonDetailPage({ person, tmdbData }: PersonDetailPageProps) {
  return (
    <div className='person-detail-container bg-sandstone min-h-screen'>
      {/* Person Banner with name, background image, and basic info */}
      <PersonBanner person={person} tmdbData={tmdbData} />

      {/* Main content area */}
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumbs
          items={[{ label: 'People', href: '/people' }, { label: person.name }]}
        />

        <div className='person-detail-grid'>
          <PersonBio person={person} tmdbData={tmdbData} />
          <PersonFilmography person={person} tmdbData={tmdbData} />
        </div>
      </div>
    </div>
  );
}
