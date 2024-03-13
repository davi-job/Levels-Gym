export interface HeaderProps {}

export function Header(props: HeaderProps) {
    return (
        <header>
            <div className="container header__container">
                <h1 className="header__title">Levels Gym</h1>

                <nav className="header__nav">
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Trainers</a>
                        </li>
                        <li>
                            <a href="#">Pricing Plans</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
