import React from 'react';
import Tasks from '../Tasks';
import Sidebar from './Sidebar';

function Content() {
  return (
    <section className="content">
      <Sidebar />
      <Tasks />
    </section>
  )
}

export default Content;
