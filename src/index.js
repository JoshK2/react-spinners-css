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
    Orbitals,
    Ring,
    Ripple,
    Roller,
    Spinner,
} from './components'
import './app.css'

const Spinners = () => {
    return (
        <div className="normal-spinners">
            <Circle color="#be97e8" />
            <Default color="#be97e8" />
            <DualRing color="#be97e8" />
            <Ellipsis color="#be97e8" />
            <Facebook color="#be97e8" />
            <Grid color="#be97e8" />
            <Heart color="#be97e8" />
            <Hourglass color="#be97e8" />
            <Ring color="#be97e8" />
            <Ripple color="#be97e8" />
            <Roller color="#be97e8" />
            <Spinner color="#be97e8" />
            <Orbitals color="#be97e8" />
        </div>
    )
}

const ColorProp = () => {
    return (
        <div className="main">
            <h2>Color Property</h2>
            <div className="block">
                <Circle color="#54f1d2" />
                <Circle color="#be97e8" />
                <Circle />
            </div>
            <div className="block">
                <Default color="#54f1d2" />
                <Default color="#be97e8" />
                <Default />
            </div>
            <div className="block">
                <DualRing color="#54f1d2" />
                <DualRing color="#be97e8" />
                <DualRing />
            </div>
            <div className="block">
                <Ellipsis color="#54f1d2" />
                <Ellipsis color="#be97e8" />
                <Ellipsis />
            </div>
            <div className="block">
                <Facebook color="#54f1d2" />
                <Facebook color="#be97e8" />
                <Facebook />
            </div>
            <div className="block">
                <Grid color="#54f1d2" />
                <Grid color="#be97e8" />
                <Grid />
            </div>
            <div className="block">
                <Heart color="#54f1d2" />
                <Heart color="#be97e8" />
                <Heart />
            </div>
            <div className="block">
                <Hourglass color="#54f1d2" />
                <Hourglass color="#be97e8" />
                <Hourglass />
            </div>
            <div className="block">
                <Ring color="#54f1d2" />
                <Ring color="#be97e8" />
                <Ring />
            </div>
            <div className="block">
                <Ripple color="#54f1d2" />
                <Ripple color="#be97e8" />
                <Ripple />
            </div>
            <div className="block">
                <Roller color="#54f1d2" />
                <Roller color="#be97e8" />
                <Roller />
            </div>
            <div className="block">
                <Spinner color="#54f1d2" />
                <Spinner color="#be97e8" />
                <Spinner />
            </div>
            <div className="block">
                <Orbitals color="#54f1d2" />
                <Orbitals color="#be97e8" />
                <Orbitals />
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    )
}

const SizeProp = () => {
    return (
        <div className="main">
            <h2>Size Property</h2>
            <div className="block">
                <Circle color="#be97e8" />
                <Circle color="#be97e8" size={32} />
                <Circle color="#be97e8" size={16} />
            </div>
            <div className="block">
                <Ring color="#be97e8" />
                <Ring color="#be97e8" size={40} />
                <Ring color="#be97e8" size={20} />
            </div>
            <div className="block">
                <DualRing color="#be97e8" />
                <DualRing color="#be97e8" size={40} />
                <DualRing color="#be97e8" size={20} />
            </div>
            <div style={{ clear: 'both' }}></div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>React Spinners</h1>
            <Spinners />
            <ColorProp />
            <SizeProp />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
