import Banners from "../common/MainBanner";
import MainNav from "../common/MainNav";
import Cards from "../home/Cards.js";
import FormPasaje from "../home/FormPasaj.js";

function Inicio(){
    return (
        <>
            <Banners />
            <FormPasaje/>
            <br></br>
            <div>
                <h1>A viajar seguro!</h1>
            </div>  
            <Cards/>
        </>
    )
}

export default Inicio;