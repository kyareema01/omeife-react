import Logo from "./logo";
import NavigationList from "./NavigationList";
import ContactButton from "./ContactButton";

export default function Header({ image }) {
    return (
        <>
          <header>
                <nav className="nav-header">
                    <Logo />
                    <NavigationList />
                    <ContactButton />
                </nav>
           </header>
            {image}
        </>
    )
}