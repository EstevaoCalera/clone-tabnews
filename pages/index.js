function Home() {
  return (
    <div>
      <h1>{`calera.dev.br (Under construction 🚧)`}</h1>

      <section>
        <h2>Objectives</h2>
        <p>
          {`This website is a personal project that serves as portfolio and personal blog. Here I will share my experiences, projects, courses that I made, professional certifications and some personal preferences: liked songs (Spotify integration), games played (Steam integration?), favorite recipes. The goal is to create a space where I can document my journey, share knowledge, and connect with others.`}
        </p>
      </section>

      <section>
        <h2>Find more!</h2>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <a
            href="https://github.com/EstevaoCalera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://linkedin.com/in/estevao-calera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://instagram.com/estevao.calera"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/21/Instagram_Glyph_Gradient_RGB_logo.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
        </div>
      </section>
      <footer>
        <p>{`© 2025 calera.dev.br. All rights reserved.`}</p>
      </footer>
    </div>
  );
}

export default Home;
