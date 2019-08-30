import React from 'react'
import ReactDOM from 'react-dom'
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
import './app.css';

const App = () => {
    return (
        <div className="main">
            <h1>React Spinners</h1>
            <div className="block">
                <Circle color="black" />
                <Circle color="#de3541" />
                <Circle />
            </div>
            <div className="block">
                <Default color="black" />
                <Default color="#de3541" />
                <Default />
            </div>
            <div className="block">
                <DualRing color="black" />
                <DualRing color="#de3541" />
                <DualRing />
            </div>
            <div className="block">
                <Ellipsis color="black" />
                <Ellipsis color="#de3541" />
                <Ellipsis />
            </div>
            <div className="block">
                <Facebook color="black" />
                <Facebook color="#de3541" />
                <Facebook />
            </div>
            <div className="block">
                <Grid color="black" />
                <Grid color="#de3541" />
                <Grid />
            </div>
            <div className="block">
                <Heart color="black" />
                <Heart color="#de3541" />
                <Heart />
            </div>
            <div className="block">
                <Hourglass color="black" />
                <Hourglass color="#de3541" />
                <Hourglass />
            </div>
            <div className="block">
                <Ring color="black" />
                <Ring color="#de3541" />
                <Ring />
            </div>
            <div className="block">
                <Ripple color="black" />
                <Ripple color="#de3541" />
                <Ripple />
            </div>
            <div className="block">
                <Roller color="black" />
                <Roller color="#de3541" />
                <Roller />
            </div>
            <div className="block">
                <Spinner color="black" />
                <Spinner color="#de3541" />
                <Spinner />
            </div>
            <div style={{clear: 'both'}}></div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))