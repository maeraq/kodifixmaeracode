// `pages/_app.js`
import styles from '../styles/globals.css';

export default function App() {
    return (
      <div className={styles.container}>
  
        <main>
          <body class="body">
            <nav>
                <div class="logo">CodingNepal</div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Team</a>
                                <ul>
                                    <li><a href="#">Collab</a></li>
                                    <li><a href="#">Human Prac</a></li>
                                    <li><a href="#">Wiki</a></li>
                                </ul>
                        </li>
                        <li>
                            <a href="#">Awards</a>
                                <ul>
                                    <li><a href="#">Award #1</a></li>
                                    <li><a href="#">Award #2</a></li>
                                    <li>
                                        <a href="#">Award#3<span class="fa fa-plus"></span></a>
                                        <ul>
                                            <li><a href>nice</a></li>
                                            <li><a href>handsom</a></li>
                                            <li><a href>hyelo</a></li>
                                        </ul>
                                    </li>
                                </ul>
                        </li>
                        <li><a href="#">Lab</a></li>
                        <li><a href="#">Human Practices</a></li>
                    </ul>
            </nav>
            <img src="C:\Users\SHAIL\Downloads\Title Drawings-20230907T094437Z-001\Title Drawings\Project Heading.PNG" width="100%"></img>
        </body>
        </main>
  
        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </footer>
  
        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: inherit;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family:
              Menlo,
              Monaco,
              Lucida Console,
              Liberation Mono,
              DejaVu Sans Mono,
              Bitstream Vera Sans Mono,
              Courier New,
              monospace;
          }
        `}</style>
  
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family:
              -apple-system,
              BlinkMacSystemFont,
              Segoe UI,
              Roboto,
              Oxygen,
              Ubuntu,
              Cantarell,
              Fira Sans,
              Droid Sans,
              Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
  