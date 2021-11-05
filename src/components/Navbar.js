import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <Link className="item" to="/">
                    Home
                </Link>
                <Link className="item" to="/articles">
                    Articles
                </Link>
                <Link className="item" to="/contacts">
                    Contacts
                </Link>
                <Link className="item" to="/forums">
                    Forums
                </Link>
                <Link className="item" to="/messages/1">
                    Messages
                </Link>
            </div>
        </div>
    )
}

export default Navbar