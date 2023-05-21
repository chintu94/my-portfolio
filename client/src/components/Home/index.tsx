import Canvas from "../Canvas";
import "./style.scss";

function HomePage() {
  return (
    <section className="container home">
      <Canvas/>
      <div className="home-page-head">
        <div className="intro-text">
          <h1>Hi, I'm Chin2</h1>
          <p>I'm a <strong>Software Engineer</strong> from <strong>India</strong>. I like working on the <strong>front-end</strong> of the web. This is my site, where I <strong>blog</strong> and share whatever <strong>side projects</strong> I've been working on.</p>
        </div>
        <div className="intro-svg">SVG will go in this</div>
      </div>
    </section>
  )
}

export default HomePage;