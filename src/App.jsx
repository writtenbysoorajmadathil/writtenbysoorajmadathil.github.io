import { useState } from 'react'
import './App.css'
import bookCover from './assets/aoePart1.png'

function App() {
  const [showElderwood, setShowElderwood] = useState(false)

  return (
    <>
      {/* ================================
          NAVIGATION
          ================================= */}

      <header className="navbar">
        <div className="navbar-container">

          <h1 className="logo">
            Sooraj Madathil
          </h1>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#books">Books</a>
            <a href="#about">About</a>
            {/* <a href="#gallery">Gallery</a> */}
            <a href="#contact">Contact</a>
          </nav>

        </div>
      </header>


      <main>

        {/* ================================
            HERO
            ================================= */}

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="hero-small-text">
              AUTHOR • STORYTELLER • CREATOR
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

              <a
                href="#books"
                className="primary-button"
              >
                Explore My Books
              </a>

              <a
                href="#about"
                className="secondary-button"
              >
                About the Author
              </a>

            </div>

          </div>

        </section>


        {/* ================================
            BOOKS
            ================================= */}

        <section id="books" className="books-section">

  {!showElderwood ? (

    <>
      <div className="section-heading">
        <p>MY BOOKS</p>
        <h2>My Books</h2>
      </div>

      <div className="books-intro">
        <p>
          Browse my published books and book series.
          More stories will be added as they are released.
        </p>
      </div>

      <div className="book-collections">

        <article className="collection-card elderwood-collection">

          <div className="collection-content">

            <span className="collection-label">
              BOOK SERIES
            </span>

            <h3>
              Adventures of Elderwood
            </h3>

            <p>
              A fantasy adventure series filled with
              unforgettable journeys, friendships,
              mysteries and discoveries.
            </p>

            <p className="series-meta">
              1 Published Book • More Coming Soon
            </p>

            <button
              className="collection-button"
              onClick={() => setShowElderwood(true)}
            >
              Explore Series →
            </button>

          </div>

        </article>

      </div>
    </>

  ) : (

    <div className="elderwood-series">

      <button
        className="back-button"
        onClick={() => setShowElderwood(false)}
      >
        ← Back to Books
      </button>

      <div className="section-heading">
        <p>BOOK SERIES</p>
        <h2>Adventures of Elderwood</h2>
      </div>

      <div className="elderwood-description">
        <p>
          Welcome to the world of Elderwood.
          Discover every adventure in the series.
        </p>
      </div>

      <div className="series-books">

        <article className="series-book">

          <div className="series-cover">

            <img
              src={bookCover}
              alt="Adventures of Elderwood Part 1 - A Dog's Tale"
            />

            <span className="published-badge">
              PUBLISHED
            </span>

          </div>

          <div className="series-book-details">

            <span className="book-number">
              PART 01
            </span>

            <h3>
              A Dog's Tale
            </h3>

            <p>
              The first adventure in the world
              of Elderwood.
            </p>

            <button className="primary-button">
              Discover the Book
            </button>

          </div>

        </article>

        <article className="series-book">

          <div className="coming-cover">
            <span>✦</span>
            <p>COMING SOON</p>
          </div>

          <div className="series-book-details">

            <span className="book-number">
              PART 02
            </span>

            <h3>
              Coming Soon
            </h3>

            <p>
              The next adventure in the Elderwood
              series is waiting to be written.
            </p>

          </div>

        </article>

      </div>

    </div>

  )}

</section>

        {/* ================================
            ABOUT
            ================================= */}

        <section
          id="about"
          className="section"
        >

          <div className="section-heading">

            <p>
              THE AUTHOR
            </p>

            <h2>
              About Sooraj Madathil
            </h2>

          </div>


          <div className="about-content">

            <div className="about-placeholder">
              SM
            </div>


            <div className="about-text">

              <p>
                Welcome to my little corner of the internet, and thank you for visiting my website.
              </p>

              <p>
                I am Sooraj Madathil, a young writer with a passion for storytelling. I enjoy creating characters, adventures, and imaginative worlds that invite readers to explore something new.
                My journey as a writer began with ideas that I wanted to transform into stories. Adventures of Elderwood is one of those ideas and the series through which I chose to begin my writing journey.

              </p>

              <p>
                I hope you enjoy exploring my work, and I look forward to sharing many more stories with you in the years ahead.
              </p>

            </div>

          </div>

        </section>


        {/* ================================
            GALLERY
            ================================= */}

        {/*
        <section
          id="gallery"
          className="section"
        >

          <div className="section-heading">

            <p>
              VISUAL WORLD
            </p>

            <h2>
              Explore Elderwood
            </h2>

          </div>


          <div className="gallery-grid">

            <div className="gallery-item">
              Elderwood
            </div>

            <div className="gallery-item">
              Adventures
            </div>

            <div className="gallery-item">
              Stories
            </div>

          </div>

        </section>
        */}


        {/* ================================
            CONTACT
            ================================= */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-content">

            <p className="contact-label">
              LET'S CONNECT
            </p>

            <h2>
              Have something to say?
            </h2>

            <p className="contact-description">
              Whether you've read one of my stories,
              have a question, or simply want to say
              hello, I'd love to hear from you.
            </p>


            <a
              href="mailto:writtenbysoorajmadathil@gmail.com"
              className="contact-button"
            >

              <span>
                ✉
              </span>

              Send Me an Email

            </a>


            <p className="contact-email">
              writtenbysoorajmadathil@gmail.com
            </p>

          </div>

        </section>

      </main>


      {/* ================================
          FOOTER
          ================================= */}

      <footer className="footer">

        <h3>
          Sooraj Madathil
        </h3>

        <p>
          Stories. Adventures. Imagination.
        </p>

        <p className="copyright">
          © 2026 Sooraj Madathil. All rights reserved.
        </p>

      </footer>

    </>
  )
}

export default App