import React from 'react';
import TopicCard from '../components/TopicCard';

const topics = [
  { id: 'intro', title: 'What is Server-Side Engineering?', summary: 'Learn the fundamentals of server-side development.' },
  { id: 'routing', title: 'HTTP and Routing', summary: 'Understand how URLs map to server logic.' },
  { id: 'client-server', title: 'Server vs Client', summary: 'Who does what in web applications.' },
  { id: 'auth', title: 'Authentication & Sessions', summary: 'How login and user sessions work.' },
  { id: 'api', title: 'APIs and REST', summary: 'Expose and consume backend services.' },
  { id: 'db', title: 'Database Integration', summary: 'Connect servers with databases securely.' },
  { id: 'middleware', title: 'Middleware Functions', summary: 'Preprocess requests using middleware.' },
  { id: 'templating', title: 'Templating Engines', summary: 'Render HTML on the server using EJS or Handlebars.' },
  { id: 'rendering', title: 'SSR vs CSR', summary: 'Server-side vs client-side rendering explained.' },
  { id: 'caching', title: 'Caching & Performance', summary: 'Speed up responses using cache.' },
  { id: 'tools', title: 'Common Tools', summary: 'Node.js, Express.js, Nginx, MongoDB, etc.' },
];

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Explore Server-Side Engineering Topics</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
        {topics.map(topic => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
