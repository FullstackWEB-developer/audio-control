import * as React from 'react'
import { render } from 'react-dom'

import Waveform from './Waveform'

import './styles.css'

class App extends React.Component {
  state = {
    src:
      'https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3'
  }
  render() {
    return (
      <div className="App">
        <h1>Saladict</h1>
        <h2>Audio Control</h2>
        <Waveform />
      </div>
    )
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     src:
    //       'https://raw.githubusercontent.com/katspaugh/wavesurfer.js/master/example/split-channels/stereo.mp3'
    //   })
    // }, 2000)
  }
}

const rootElement = document.getElementById('root')
render(<App />, rootElement)
