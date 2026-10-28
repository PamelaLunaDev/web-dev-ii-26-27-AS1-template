
import logo from './assets/logo.svg' /* Imports the logo used at the top of the website. */

import allEncores from './assets/images/all-encores.jpg' /* Imports the All Encores album image. */
import articulation from './assets/images/articulation.jpg' /* Imports the Articulation album image. */
import blurred from './assets/images/blurred.jpg' /* Imports the Blurred album image. */
import encores2 from './assets/images/encores-2.jpg' /* Imports the Encores 2 album image. */
import theCell from './assets/images/the-cell.jpg' /* Imports the The Cell album image. */

import profilePicture from './assets/profile_picture.jpg' /* Imports the author's profile picture. */

import facebookIcon from './assets/icons/facebook-icon.png' /* Imports the Facebook icon. */
import instagramIcon from './assets/icons/instagram-icon.svg' /* Imports the Instagram icon. */
import twitterIcon from './assets/icons/twitter-icon.svg' /* Imports the Twitter icon. */

import './App.css' /* Imports the CSS file that controls the website's appearance. */

function Header() { /* Creates the header with the logo and navigation links. */
  return (
    <header className="site-header">
      <div className="logo">
        <img src={logo} alt="Erased Tapes logo" />
      </div>

      <nav className="navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  )
}

function Article() { /* Displays the main article with its title, introduction and text sections. */
  return (
    <article>
      <h1>Erased Tapes:</h1>

      <h2 className="subtitle">
        Exploring the Sonic Frontier
      </h2>

      <p className="introduction">
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor? Leo
        condimentum himenaeos molestie elit; maximus iaculis
        proin nulla. Ullamcorper nibh cras conubia suscipit
        dapibus sagittis, facilisi habitant vivamus. Etiam
        fusce posuere himenaeos ipsum commodo sollicitudin
        himenaeos nec.
      </p>

      <div className="article-columns"> {/* Groups the article text into sections for the column layout. */}
        <section>
          <h3>Heading</h3>

          <p>
            Montes ridiculus mus tellus nunc vulputate.
            Cras facilisi congue et facilisis porttitor
            litora etiam praesent porttitor. Sollicitudin
            cubilia scelerisque diam taciti lacus. Dapibus
            penatibus augue dapibus sagittis; rhoncus
            accumsan. Accumsan urna et, ultrices placerat
            justo rutrum. Tristique mattis ante cras
            accumsan convallis phasellus fermentum magna.
            Rhoncus curabitur pharetra proin ante nam
            adipiscing accumsan hac. Rutrum efficitur
            nullam integer ut ex id. Pulvinar vel at
            vestibulum vivamus sed nascetur eget.
          </p>

          <p>
            Laoreet volutpat hendrerit est aliquam; fusce
            quam tempor. Nisi interdum praesent pellentesque
            non non blandit cubilia et. Aptent maximus
            vehicula nullam odio tempor. Placerat dis
            facilisis potenti iaculis, primis vivamus nec
            at magnis. Aadipiscing curabitur vestibulum
            imperdiet dolor primis. Inceptos penatibus
            inceptos eu habitasse aptent vehicula platea
            litora congue. Ultricies mauris fringilla
            rhoncus pharetra iaculis vitae. Venenatis
            himenaeos eget molestie dignissim consectetur
            tellus litora. Porta a iaculis mi primis rhoncus.
          </p>

          <p>
            Curae habitasse elementum amet nunc, natoque at.
            Tortor vel blandit sociosqu auctor aliquam
            maximus porta feugiat. Eros phasellus platea
            mauris condimentum natoque hendrerit tellus id.
            Ex imperdiet vitae maximus adipiscing neque
            quam tempor orci. Lobortis porta lacinia cubilia
            tellus vel placerat; facilisis mi euismod.
            Neque eu orci nulla penatibus elit nec.
          </p>

          <p>
            Parturient habitasse facilisis purus donec,
            enim platea maximus. Primis class varius augue
            sed class ultricies. Posuere curabitur tristique
            penatibus montes hac ac imperdiet. Risus per
            sociosqu, cursus leo condimentum ac fringilla.
            Nibh curabitur eros tempus nec; nam curae
            hendrerit. Mattis placerat maximus mollis
            praesent, eros adipiscing dui.
          </p>
        </section>

        <section>
          <h3>Heading</h3>

          <p>
            Habitasse ornare fames facilisis montes pulvinar
            habitasse fringilla. Risus porta cursus duis
            vivamus quam adipiscing nec. Ante at posuere
            eget aptent natoque vivamus ante. Aenean enim
            dapibus viverra sem efficitur. Felis nam semper
            integer justo in. Facilisi augue urna torquent
            lacinia facilisi inceptos. Natoque varius
            feugiat massa scelerisque natoque, cras tempor
            inceptos.
          </p>

          <p>
            Amet ac leo, imperdiet hac litora auctor.
            Suscipit congue duis sociosqu auctor euismod
            vivamus urna diam. Nunc enim himenaeos litora
            facilisi, tincidunt torquent. Eros sapien
            laoreet duis, volutpat rutrum pulvinar. Natoque
            semper sapien aptent quis habitant aliquam
            condimentum luctus. Tempus pellentesque congue
            varius dapibus pharetra. Fermentum diam auctor
            bibendum rhoncus leo. Vestibulum tincidunt
            fames convallis ligula semper porttitor.
          </p>

          <p>
            Magnis maximus morbi, litora accumsan vivamus
            facilisi etiam pharetra. Platea congue orci
            sagittis purus scelerisque. Velit taciti
            maecenas praesent nam lobortis metus vehicula
            habitasse porttitor. Porta gravida placerat
            lobortis litora elit feugiat venenatis.
            Cras magna himenaeos consequat aliquet ad
            nec pharetra. Ligula eleifend imperdiet aptent
            primis placerat. Nec magnis tempus vulputate
            ipsum ad sagittis mus.
          </p>
        </section>

        <section>
          <h3>Heading</h3>

          <p>
            Vulputate nullam tempus montes eu tellus
            integer adipiscing pulvinar. Pharetra eu
            luctus id a potenti. Pulvinar egestas conubia
            ante varius lobortis iaculis metus. Netus
            sem imperdiet hendrerit vehicula netus est
            gravida tortor. Nunc ridiculus per montes
            nulla, facilisis lacinia per leo. Hendrerit
            scelerisque nulla in suspendisse sit tortor
            sagittis. Suscipit dictumst ipsum laoreet
            cras egestas suscipit orci. Per molestie
            felis erat platea blandit commodo.
          </p>

          <p>
            Ad venenatis sapien habitant posuere donec
            porttitor vel nisi. Sodales laoreet donec
            diam rhoncus lectus euismod orci torquent
            curae. Fames rhoncus torquent sed convallis;
            potenti cras. Dictumst arcu libero nulla
            malesuada mi ridiculus platea. Interdum
            ullamcorper fringilla himenaeos mollis;
            in arcu pharetra massa. Nunc mauris taciti
            montes sapien molestie orci ac quis.
          </p>
        </section>
      </div>
    </article>
  )
}

function AlbumGallery() { /* Creates the album gallery using the five images provided. */
  const albums = [ /* Stores the album images and their descriptions in a list. */
    { id: 1, image: theCell, alt: 'The Cell album artwork' },
    { id: 2, image: allEncores, alt: 'All Encores album artwork' },
    { id: 3, image: articulation, alt: 'Articulation album artwork' },
    { id: 4, image: blurred, alt: 'Blurred album artwork' },
    { id: 5, image: encores2, alt: 'Encores 2 album artwork' },
  ]

  return (
    <section
      className="album-gallery"
      id="artists"
      aria-label="Album gallery"
    >
      {albums.map((album) => ( /* Creates an image for each album and makes the first one larger. */
        <div
          key={album.id}
          className={
            album.id === 1 ? 'album album-featured' : 'album'
          }
        >
          <img src={album.image} alt={album.alt} />
        </div>
      ))}
    </section>
  )
}

function SocialIcons({ className = '' }) { /* Creates a reusable group of social media icons. */
  const socialLinks = [ /* Stores the names and images of the social media platforms. */
    { name: 'Facebook', image: facebookIcon, style: '' },
    { name: 'Instagram', image: instagramIcon, style: '' },
    { name: 'Twitter', image: twitterIcon, style: 'twitter-icon' },
  ]

  return (
    <div className={`social-icons ${className}`}>
      {socialLinks.map((social) => ( /* Displays each social media icon from the list. */
        <img
          key={social.name}
          className={social.style}
          src={social.image}
          alt={social.name}
          title={social.name}
        />
      ))}
    </div>
  )
}

function Author() { /* Displays the author's description, profile picture and social media icons. */
  return (
    <section className="author-section" id="story">
      <div className="author-information">
        <h2>The Author</h2>

        <p>
          Sapien leo scelerisque per convallis torquent
          nunc. Lobortis eleifend a nam sit turpis
          nostra. Tempus suspendisse libero curae
          faucibus lobortis litora bibendum praesent!
          Eget quam magna, diam commodo interdum
          sapien magnis.
        </p>
      </div>

      <img
        className="author-photo"
        src={profilePicture}
        alt="Portrait of the article author"
      />

      <SocialIcons className="author-socials" />
    </section>
  )
}

function Comments() { /* Displays the comments section using a list of three comments. */
  const comments = [ /* Stores the usernames and messages shown in the comments section. */
    {
      id: 1,
      username: 'soundseeker92',
      message:
        "This article beautifully captures the essence of experimental sound. Erased Tapes is truly pushing boundaries. Makes me want to revisit Nils Frahm's early work. I wonder what you think about their older stuff?",
    },
    {
      id: 2,
      username: 'Ted Baker',
      message:
        "I've been following the label for years, so glad someone's finally writing about their impact.",
    },
    {
      id: 3,
      username: 'Queen_of_noise',
      message:
        'I discovered Erased Tapes through Ólafur Arnalds. This article brought back memories and be and my friends listening together. A bit too poetic for my taste, but still compelling.',
    },
  ]

  return (
    <section className="comments-section" id="comments">
      <h2>Comments</h2>

      <div className="comments-list">
        {comments.map((comment) => ( /* Creates a separate section for each comment in the list. */
          <div className="comment" key={comment.id}>
            <h3>{comment.username}</h3>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() { /* Creates the footer with navigation links, copyright text and social icons. */
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <nav className="footer-navigation">
          <a href="#blog">Our Blog</a>
          <a href="#artists">Our Artists</a>
          <a href="#story">Our Story</a>
        </nav>

        <p>Copyright © 2023 Erased Disks Ltd.</p>

        <SocialIcons className="footer-socials" />
      </div>
    </footer>
  )
}

function App() { /* Combines all the components to create the complete Erased Tapes website. */
  return (
    <>
      <Header />

      <main id="blog" className="content">
        <Article />
        <AlbumGallery />
      </main>

      <Author />
      <Comments />
      <Footer />
    </>
  )
}

export default App /* Exports the main App component so React can display the website. */
