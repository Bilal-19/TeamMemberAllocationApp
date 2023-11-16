import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link highlight-nav'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/GroupedTeamMembers' className='nav-link highlight-nav'>Teams</Link>
                    </li>
                </ul>
            </nav>
        </>
    )

}

export default Navigation
