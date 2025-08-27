import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <div>
            <h1>contact</h1>
            <div className="flex w-[400px] justify-around ">
                <Link to='/'>home</Link>
                <Link to='/about'>about</Link>
                <Link to='/contact'>contact</Link>
            </div>
        </div>
    )
}

export default Contact
