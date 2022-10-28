import './App.css'
import ProfileImage from '../src/assets/20220529_232847.jpg'
import IconMen from '../src/assets/Iconmen.png'
import IconExit from '../src/assets/Iconexit.png'
import Title from '../src/assets/Vectorzurititle.png'
import IG from '../src/assets/I4gingressivepng.png'
import Slack from '../src/assets/slack.png'
// import Camera from '../src/assets/Iconcamera.png'
import Github from '../src/assets/Icongithub.png'

import Button from './components/Button'

function App() {

  return (
    <div className="App">

      <div className="nav">
        <div className="mobile">
        {/* <img className='mobile-share' src={IconMen} alt="" /> */}
        <div className="mobile-share">
          ...
        </div>
        <img className='desktop-share' src={IconExit} alt="" />
        </div>
        <div className="desk">
        </div>
      </div>

      <div className="profile">
        <div className="img">
        <img className='image' src={ProfileImage} alt="profile image" />
        {/* <img className='image-1' src={Camera} alt="profile hober" /> */}

        </div>
        <p className='name'>Adebisi Ayomide</p>
      </div>
      
      <div className="links">
      <a  href="https://twitter.com/aiiomide">
      <Button id='twitter' title='Twitter Link'/>
      </a>
      <a className='slacklink' href="">
      <Button id='slack' title='Slack Link'/>
      </a>
      <a href="https://training.zuri.team/">
      <Button id='btn__zuri' title='Zuri Team'/>
      </a>
      <a href="http://books.zuri.team" title='check your design and coding books here'>
      <Button id='books' title='Zuri Books'/>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Aio>" title='Buy my full stack python courses for beginners'>
      <Button id='book__python' title='Python Books'/>
      </a>
      <a href="https://background.zuri.team" title='background checks: the only check you will ever need in your field'>
      <Button id='pitch' title='Background Check for Coders'/>
      </a>
      <a href="https://books.zuri.team/design-rules" title='get your free design books here'>
      <Button id='book__design' title='Design Books'/>
      </a>
      </div>
      <div className="icons">
        <img src={Slack} alt="slack image" className='slack' />
        <img src={Github} alt="Github image" className='github' />
      </div>
      {/* <hr className='hr'/> */}
      <div className="footer">
        <img className='zuri' src={Title} alt="Zuri-internship" />
        <p className='wide'>HNG Internship Frontend Task</p>
        <img src={IG} alt="ingressive" />
      </div>
    </div>
  )
}

export default App

