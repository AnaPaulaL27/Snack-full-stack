import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Recipe Gen</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/homepage' activeClassName={classes.active}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/find-recipes' activeClassName={classes.active}>Find Recipes</NavLink>
                    </li>
                   <li>
                       <NavLink to='/add-recipe' activeClassName={classes.active}>Add Recipe</NavLink>
                   </li>
                   <li>
                       <NavLink to='/contact' activeClassName={classes.active}>Contact</NavLink>
                   </li>
                
                </ul>
            </nav>
        </header>



        
    )



}

export default Navbar;