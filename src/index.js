import React from 'react'
import ReactDOM from 'react-dom'
import { getRandomColor } from '@bit/joshk.jotils.get-random-color'
import {
    Circle,
    Default,
    DualRing,
    Ellipsis,
    Facebook,
    Grid,
    Heart,
    Hourglass,
    Ring,
    Ripple,
    Roller,
    Spinner,
} from './components'

const App = () => {
    return (
        <div>
            <Circle color={getRandomColor()} />
            <Default color={getRandomColor()} />
            <DualRing color={getRandomColor()} />
            <Ellipsis color={getRandomColor()} />
            <Facebook color={getRandomColor()} />
            <Grid color={getRandomColor()} />
            <Heart color={getRandomColor()} />
            <Hourglass color={getRandomColor()} />
            <Ring color={getRandomColor()} />
            <Ripple color={getRandomColor()} />
            <Roller color={getRandomColor()} />
            <Spinner color={getRandomColor()} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
