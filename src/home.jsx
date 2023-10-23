const DISCZ_IG = 'https://www.instagram.com/disczmusic/'
const DISCZ_CAREERS = 'https://www.ycombinator.com/companies/discz/jobs'
const DISCZ_APP_STORE = 'https://apps.apple.com/us/app/discz-myspace-music-chat/id1521888879'

const Home = () => (
  <div className="relative h-screen">
    <a
      href={DISCZ_APP_STORE}
      target="_blank"
      rel="noreferrer"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img src="img/discz_logo.gif" alt="logo" className="w-50 sm:w-[300px]" />
    </a>
    <div className="absolute bottom-0 left-0 w-full flex flex-col sm:flex-row space-y-8 sm:space-y-0 items-center justify-between pb-12 px-12">
      <img src="img/app_store_download.png" alt="app store download" className="h-12" />
      <div className="flex space-x-8">
        <a href={DISCZ_IG} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href={DISCZ_CAREERS} target="_blank" rel="noreferrer">
          Careers
        </a>
        <a href="pdf/terms.pdf" download>
          Terms
        </a>
        <a href="pdf/privacy.pdf" download>
          Privacy
        </a>
      </div>
    </div>
  </div>
)

export default Home
