import Link from "../link/Link";
import "./Navbar.css"

function Navbar() {
    const x = 1;
    const img = "/vite.svg";
    const img2 = "vite";
    const style = {
        height: "200px",
        borderRadius: "20px"
    }

    return (
        <>
            <div className={`box rounded ${x < 10 ? "rotated" : "" }`}> ciao </div> {/* metodo per rendere dinamico il css inline */}
            <nav>{x > 1000 ? "sopra 1000" : "sotto 1000"}</nav> {/* le {} permettono di scrivere codice javascript al suo interno*/}
            <a href="http://localhost:5174/"> <img style={style} src={img}/> style inline with object </a> {/* alternativa all'uso dello stile tramite oggetto javascript */}
            <a href="http://localhost:5174/"> <img style={{ height: "200px" }} src={`/${img2}.svg`} /> style inline </a> {/* ATTENZIONE le {{}} sintassi che rappresenta un oggetto*/}
            <a href="http://localhost:5174/"> <img className="immagine-arrotondata" src={img}/> className </a> {/* alternativa all'uso dello stile tramite className */}

            
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