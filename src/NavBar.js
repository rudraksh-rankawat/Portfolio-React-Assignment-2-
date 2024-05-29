/*
    Nav Bar Component:

    Use UI as a container
    Have 4 LI's
    Have anchor tag inside lis to make the elements linkable
    We will use icons to render the images
    we will create the underline effect using after
    On hover make the underlune
    We could animate thewidth property of the underline in order to achieve the animation
*/
import "./NavBar.css";


function navBar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-itnem"><a href="">Home</a></li>
                <li className="nav-itnem"><a href="">About</a></li>
                <li className="nav-itnem"><a href="">Project</a></li>
                <li className="nav-itnem"><a href="">Resume</a></li>
            </ul>
        </nav>
    )
}

export default navBar;