import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-content section">
        <div className="container">
          <div className="blog-header">
            <h1>Le Blog FIIDI</h1>
            <p>Découvrez les dernières actualités du cinéma indépendant</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content-card">
                <h3>Article de blog à venir</h3>
                <p>Le contenu du blog sera bientôt disponible...</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content-card">
                <h3>Article de blog à venir</h3>
                <p>Le contenu du blog sera bientôt disponible...</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image"></div>
              <div className="blog-content-card">
                <h3>Article de blog à venir</h3>
                <p>Le contenu du blog sera bientôt disponible...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
