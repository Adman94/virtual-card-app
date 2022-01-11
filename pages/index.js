import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>adman94</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="main">
        <div className="profile-container">
          <img className="image" src="/img.png" alt="alt-img"/> 
          <h3 className="description">@adman94</h3>
        </div>
      </main>

        <div className="grid">
          <a href="https://www.linkedin.com/in/adman94/" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">LinkedIn</h3>
          </a>
          <a href="https://codeurlife.com" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">Website</h3>
          </a>
          <a href="https://github.com/Adman94" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">Github</h3>
          </a>
          <a href="https://www.instagram.com/ad007man/" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">Instagram</h3>
          </a>
          <a href="https://www.facebook.com/ad33b94/" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">Facebook</h3>
          </a>
          <a href="https://twitter.com/Adman00794" target="_blank" rel="noopener noreferrer" className="card">
            <h3 className="sites">Twitter</h3>
          </a>
        </div>

      <style jsx>{`
        .container {
          background-color: #93e6c7;
        }
        .profile-container {
          transition: transform .5s;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .description {
          margin-top: 8px;
          font-weight: 900;
          font-size: 20px;
          opacity: 0.2;
        }
        

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 30%;
          padding: 15px;
          margin: auto;
        }

        .image {
          width: 120px;
          height: 120px;
          background-color: white;
          border-radius: 50%;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .sites {
          
          font-weight: 900;
          font-size: 20px;
          opacity: 0.5;
        }

        .card {
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1rem;
          text-align: center;
          background: #fffce3;

          color: inherit;
          text-decoration: none;
          border: 1px solid #f2e785;
          border-radius: 15px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 350px;
        }

        @media (max-width: 350px) {
          .card {
            min-width: 275px;
          }
          .card h3 {
            margin: 0 3rem 0 3rem;
            font-size: 1.25rem;
          }
        }
     `}</style>
    </div>
  )
}