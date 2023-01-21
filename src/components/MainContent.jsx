function MainContent() {
  return (
    <main className="main">
      <div className="container--main">
        <div className="text-center mg-block">
          <h1 className="fs-600 fw-600">Laura Smith</h1>
          <p className="text-orange fs-500 fw-500">Frontend Developer</p>
          <p>laurasmith.website</p>
        </div>

        <div className="socials">
          <div className="even-columns">
            <button className="btn bg-white text-dark fw-500"><img className="social-icon" src="/icon-gmail.svg" alt="gmail icon" /> Email</button>
            <button className="btn bg-blue text-white fw-500"><img className="social-icon" src="/icon-linkedln.svg" alt="linkedln icon" /> Linkedln</button>
          </div>
        </div>

        <div className="info mg-block" style={{ '--mg-block': '1.5rem' }}>
          <div className="about">
            <h3 className="fs-500 fw-600">About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>

          <div className="interest">
            <h3 className="fs-500 fw-600">Interest</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
