import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Sooraj Madathil</h1>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#books">Books</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="hero-small-text">
              AUTHOR • STORYTELLER • DREAMER
            </p>

            <h2>
              Welcome to My
              <span> Author Website</span>
            </h2>

            <p className="hero-description">
              Discover stories, adventures, and creative works
              written by Sooraj Madathil.
            </p>

            <p className="development-notice">
              🚧 Currently Under Development
            </p>

            <div className="hero-buttons">
              <a href="#books" className="primary-button">
                Explore My Books
              </a>

              <a href="#about" className="secondary-button">
                About the Author
              </a>
            </div>
          </div>
        </section>

        <section id="books" className="section">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Books & Stories</h2>
          </div>

          <div className="book-card">
            <div className="book-cover">
              <div className="book-placeholder">
                <span>ADVENTURES</span>
                <strong>OF ELDERWOOD</strong>
                <small>PART 1: A DOG'S TALE</small>
              </div>
            </div>

            <div className="book-details">
              <p className="book-label">PUBLISHED BOOK</p>

              <h3>
                Adventures of Elderwood:
                <br />
                Part 1 — A Dog's Tale
              </h3>

              <p>
                Step into the world of Elderwood and follow
                an unforgettable journey filled with adventure,
                friendship, and discovery.
              </p>

              <button className="primary-button">
                Discover the Book
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p>THE AUTHOR</p>
            <h2>About Sooraj Madathil</h2>
          </div>

          <div className="about-content">
            <div className="about-placeholder">SM</div>

            <div className="about-text">
              <p>
                Welcome to my little corner of the internet.
              </p>

              <p>
                I am Sooraj Madathil, an author who enjoys
                creating stories, characters, and worlds that
                invite readers to imagine something different.
              </p>

              <p>
                My journey as a writer began with ideas that
                I wanted to turn into stories. Adventures of
                Elderwood is one of those stories.
              </p>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="section-heading">
            <p>VISUAL WORLD</p>
            <h2>Explore Elderwood</h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item">Elderwood</div>
            <div className="gallery-item">Adventures</div>
            <div className="gallery-item">Stories</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <p>GET IN TOUCH</p>
            <h2>Contact</h2>
          </div>

          <p>Have something to say? I'd love to hear from you.</p>

          <a
            href="mailto:your-email@example.com"
            className="primary-button"
          >
            Contact Me
          </a>
        </section>
      </main>

      <footer className="footer">
        <h3>Sooraj Madathil</h3>
        <p>Stories. Adventures. Imagination.</p>

        <p className="copyright">
          © 2026 Sooraj Madathil. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;