import React from 'react';
import { Link } from 'react-router-dom';
import './topicCard.css';

export default function TopicCard({ topic }) {
  return (
    <Link to={`/topic/${topic.id}`} className="topic-card">
      <h3>{topic.title}</h3>
      <p>{topic.summary}</p>
    </Link>
  );
}
