import Link from "../link/Link";
import "./Navbar.css"

function Navbar() {
    const x = 11;
    const img = "/vite.svg";
    const img2 = "vite";
    const style = {
        height: "200px",
        borderRadius: "20px"
    }

    return (
        <>
            <div className={`bg-red-500 rouded-lg w-72 h-72 ${x < 10 ? "bg-red-500 rotate-45" : "bg-slate-700"}`}> ciao </div> {/* utilizzando il framework Tailwind CSS */}           
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