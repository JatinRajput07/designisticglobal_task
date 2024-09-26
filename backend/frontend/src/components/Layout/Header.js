import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter()
    return (
        <>
            <header>
                <div className="container">
                    <nav className="navbar shadow-0">
                        <div className="col-lg-2">
                            <Link href="/">
                                <Image className="w-100" src="/img/logo.png" alt="logo" width={150} height={80} />
                            </Link>
                        </div>
                        <div className="menu-list col-lg-8 font-weight-bold">
                            <ul className="list-inline m-0 mx-5 navbar shadow-0">
                                <li className={`nav-item ${router.pathname === '/' ? 'active' : ''}`}>
                                    <Link href="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/service' ? 'active' : ''}`}>
                                    <Link href="/service" className="nav-link">
                                        Services
                                    </Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/contact' ? 'active' : ''}`}>
                                    <Link href="/contact" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/about' ? 'active' : ''}`}>
                                    <Link href="/about" className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                                <li className={`nav-item ${router.pathname === '/career' ? 'active' : ''}`}>
                                    <Link href="/career" className="nav-link">
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 text-center">
                            <button className="btn btn ripple-surface rounded-circle">
                                <i className="fab fa-facebook" />
                            </button>
                            <button className="btn btn ripple-surface rounded-circle">
                                <i className="fab fa-google" />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
