import Navigation from "components/Navigation/Navigation"
import Logo from "components/Logo/Logo"
import Button from "components/Button/Button"
import css from "./Header.module.css"

function Header() {

    return (<header className={css.header}>
        <Navigation/>
        <Logo/>
        <Button title="Buy Now"/>
</header>) 
}

export default Header