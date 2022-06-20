import Navbar from "./Navbar";
import classes from './Layout.module.css'

const Layout = (props) => {
    return (
        <>
        <Navbar />
        <main className={classes.main}>{props.children}</main>
        
        </>
    )



}

export default Layout;