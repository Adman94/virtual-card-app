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
    </div>
  )
}