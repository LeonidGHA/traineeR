import s from './Navigation.module.css'

function Navigation() {
    return (<nav>
        <ul className={s.classList }>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>)
}

export default Navigation;
