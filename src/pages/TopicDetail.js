import React from 'react';
import './TopicDetail.css';

import { useParams, useNavigate } from 'react-router-dom';

const topicContent = {
  intro: {
    title: 'What is Server-Side Engineering?',
    content: `Server-side engineering is the backbone of dynamic web applications.
    It involves handling HTTP requests, executing business logic, accessing databases,
    managing user authentication, and generating responses. While client-side code runs
    in the browser, server-side code is executed on the server, allowing applications to
    deliver data-rich, secure, and scalable functionality.`,
    image: '/images/SSE.webp' 
  },
  routing: {
    title: 'HTTP and Routing',
    content: `Routing is how a server maps incoming requests (URLs) to specific
    functionality. For instance, when you visit "/login", the server knows it should
    trigger the login controller. Express.js provides methods like app.get(), app.post()
    to define routes. Modern routing also supports parameters and middleware.`,
    image: '/images/HTTP.png'
  },
  'client-server': {
    title: 'Server vs Client',
    content: `The client is the front-facing interface users interact with — it handles
    visuals and inputs. The server does the heavy lifting behind the scenes: processing
    logic, querying databases, and sending the results back to the client. Together,
    they form the core architecture of web applications.`,
    image: '/images/client_server.webp'
  },
  auth: {
    title: 'Authentication & Sessions',
    content: `Authentication is verifying a user's identity (e.g., login), and sessions
    help the server remember that user across multiple requests. Sessions are commonly
    stored in server memory or databases. Alternatives like JWTs (JSON Web Tokens)
    are also popular for stateless authentication.`,
    image: '/images/authAndSession.png'
  },
  api: {
    title: 'APIs and REST',
    content: `RESTful APIs allow frontends to communicate with servers over HTTP using
    endpoints like /api/users. Each HTTP method (GET, POST, PUT, DELETE) corresponds to
    an action. REST APIs are scalable, standardized, and form the basis of modern
    frontend-backend communication.`,
    image: '/images/api-rest-model.png'
  },
  db: {
    title: 'Database Integration',
    content: `Servers interact with databases (like MongoDB, MySQL, PostgreSQL) using
    queries to retrieve or modify data. ORMs (Object-Relational Mappers) like Sequelize
    or Mongoose allow you to write database logic in your server code more easily.`,
    image: '/images/database.webp'
  },
  middleware: {
    title: 'Middleware Functions',
    content: `Middleware functions are executed before the final request handler.
    They're used for logging, authentication, parsing request bodies, and more.
    Middleware is like a processing pipeline. In Express, you can write
    \`app.use((req, res, next) => {...})\`.`,
    image: '/images/middleware.webp'
  },
  templating: {
    title: 'Templating Engines',
    content: `Templating engines allow you to embed server data into HTML files.
    Engines like EJS, Handlebars, and Pug render dynamic pages server-side before
    sending them to the browser. It’s especially useful when you want SEO and fast
    page loads.`,
    image: '/images/template-engine.webp'
  },
  rendering: {
    title: 'SSR vs CSR',
    content: `Server-Side Rendering (SSR) generates HTML on the server and sends it
    to the client — this is great for SEO and initial speed. Client-Side Rendering (CSR),
    often seen in React apps, renders content in the browser. Hybrid approaches like
    Next.js combine both.`,
    image: '/images/csr-vs-ssr.png'
  },
  caching: {
    title: 'Caching & Performance',
    content: `Caching improves performance by storing frequently requested data
    temporarily. Server-side caches (Redis, Memcached) and browser-side caches
    reduce latency and load. Smart caching strategies can dramatically improve user
    experience and reduce server cost.`,
    image: '/images/cache.webp'
  },
  tools: {
    title: 'Common Tools',
    content: `Common server-side tools include:
    - Node.js (JavaScript runtime)
    - Express.js (web framework)
    - MongoDB, PostgreSQL (databases)
    - Redis (cache)
    - Docker (containers)
    - Nginx (reverse proxy)
    These tools help developers build scalable and efficient backend systems.`,
    image:'/images/tools.webp'
  }
};

export default function TopicDetail() {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const topicKeys = Object.keys(topicContent);
  const currentIndex = topicKeys.indexOf(topicId);
  const topic = topicContent[topicId];

  const prevTopicId = topicKeys[currentIndex - 1];
  const nextTopicId = topicKeys[currentIndex + 1];

  if (!topic) return <p style={{ padding: '1rem' }}>Topic not found.</p>;

  return (
  <div className="topic-container">
    <h2 className="topic-heading">{topic.title}</h2>

    <img
      src={topic.image}
      alt={topic.title}
      className="topic-image"
    />

    <p className="topic-content">{topic.content}</p>

    <div className="topic-buttons">
      <button onClick={() => navigate('/')} className="topic-button">
        ← Back to Home
      </button>
      {prevTopicId && (
        <button
          onClick={() => navigate(`/topic/${prevTopicId}`)}
          className="topic-button"
        >
          ← Previous
        </button>
      )}
      {nextTopicId && (
        <button
          onClick={() => navigate(`/topic/${nextTopicId}`)}
          className="topic-button"
        >
          Next →
        </button>
      )}
    </div>
  </div>
);

}



