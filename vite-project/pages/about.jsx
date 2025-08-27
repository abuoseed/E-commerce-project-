import { Link } from "react-router-dom"
const About = () => {
    return (
        <div>
            <h1>about</h1>
            <div className="flex w-[400px] justify-around ">
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/contact'>contact</Link>
            </div>
        </div>
    )
}

export default About
