
import './App.css' /* Imports the CSS file used to style the website. */

import palmSpringsPoster from './images/palm-springs.jpg' /* Imports the Palm Springs poster. */
import barbiePoster from './images/barbie.jpg' /* Imports the Barbie poster. */
import laLaLandPoster from './images/la-la-land.jpg' /* Imports the La La Land poster. */
import rogerRabbitPoster from './images/who-framed-roger-rabbit.jpg' /* Imports the Roger Rabbit poster. */
import hookPoster from './images/hook.jpg' /* Imports the Hook poster. */
import hiddenFiguresPoster from './images/hidden-figures.jpg' /* Imports the Hidden Figures poster. */

const movies = [ /* Stores the information for all six movies, including their titles, images and descriptions. */
  {
    id: 1,
    title: 'Palm Springs (2020)',
    image: palmSpringsPoster,
    description:
      'A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.',
  },
  {
    id: 2,
    title: 'Barbie (2023)',
    image: barbiePoster,
    description:
      'Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!',
  },
  {
    id: 3,
    title: 'La La Land (2016)',
    image: laLaLandPoster,
    description:
      'Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!',
  },
  {
    id: 4,
    title: 'Who Framed Roger Rabbit (1988)',
    image: rogerRabbitPoster,
    description:
      'In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!',
  },
  {
    id: 5,
    title: 'Hook (1991)',
    image: hookPoster,
    description:
      'Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.',
  },
  {
    id: 6,
    title: 'Hidden Figures (2016)',
    image: hiddenFiguresPoster,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
]

function Header() { /* Creates the website header with the logo, movie categories and search button. */
  return (
    <header className="site-header">
      <h1 className="site-logo">watch.it</h1>

      <nav className="site-navigation" aria-label="Movie categories">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        SEARCH
      </button>
    </header>
  )
}

function MovieCard({ movie, index }) { /* Creates a reusable movie card using the information passed to the component. */
  let cardType = ''

  if (index === 0) { /* Makes the first movie a featured card. */
    cardType = 'featured'
  } else if (index >= 3) { /* Makes the last three movies horizontal cards. */
    cardType = 'horizontal'
  }

  return ( /* Displays the movie poster, description and WATCH NOW button. */
    <article className={`movie-card ${cardType}`}>
      <img
        className="movie-poster"
        src={movie.image}
        alt={`${movie.title} movie poster`}
      />

      <div className="movie-details">
        <p className="movie-description">
          {movie.description}
        </p>

        <button className="watch-button" type="button">
          WATCH NOW
        </button>
      </div>
    </article>
  )
}

function App() { /* Creates the main application and displays the header and movie collection. */
  return (
    <>
      <Header />

      <main className="movies-container" id="movies">
        <div className="movies-grid">
          {movies.map((movie, index) => ( /* Creates one movie card for each movie in the list. */
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App /* Exports the App component so it can be used by the React application. */
