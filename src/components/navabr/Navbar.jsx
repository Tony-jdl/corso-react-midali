import Link from "../link/Link";
import "./Navbar.css"

function Navbar() {
    const x = 1001;
    const img = "/vite.svg";
    const img2 = "vite";
    return (
        <>
            <nav>{x > 1000 ? "sopra 1000" : "sotto 1000"}</nav> {/* le {} permettono di scrivere codice javascript al suo interno*/}
            <a href="http://localhost:5174/"> <img src={img}/> </a>
            <a href="http://localhost:5174/"> <img style={{ height: "200px" }} src={`/${img2}.svg`} /> </a> {/* ATTENZIONE le {{}} sintassi che rappresenta un oggetto*/}
            <ul>
                <li>
                    <a href="#">Ciao</a>
                </li>
                <li>
                    <Link children={"Sono il Link"}></Link>
                </li>
                <li>
                    <a href="#">Ciao</a>
                </li>
                <li>
                    <a href="#">Ciao</a>
                </li>
                <li>
                    <a href="#">Ciao</a>
                </li>
            </ul>
        </>
    )
}

export default Navbar;