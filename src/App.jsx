import './App.css'
import ProfileImage from '../src/assets/Device=Mobile, State=Default.png'
import IconMen from '../src/assets/Iconmen.png'

import Button from './components/Button'

function App() {

  return (
    <div className="App">

      <div className="nav">
        <img src={IconMen} alt="" />
      </div>

      <div className="profile">
        <img src={ProfileImage} alt="profile image" />
        <p>Annette Black</p>
      </div>
      
      <a href="https://twitter.com/aiiomide">
      <Button id='twitter' title='Twitter Link'/>
      </a>
      <a href="">
      <Button id='slack' title='Slack Link'/>
      </a>
      <a href="https://training.zuri.team/">
      <Button title='Zuri Team'/>
      </a>
      <a href="http://books.zuri.team">
      <Button id='books' title='Zuri Books'/>
      </a>
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Aio>">
      <Button id='book__python' title='Python Books'/>
      </a>
      <a href="https://background.zuri.team">
      <Button id='pitch' title='Background Check for Coders'/>
      </a>
      <a href="https://books.zuri.team/design-rules">
      <Button id='book__design' title='Design Books'/>
      </a>
    </div>
  )
}

export default App

