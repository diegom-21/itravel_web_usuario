import Banners from "../common/MainBanner";
import MainNav from "../common/MainNav";
import Cards from "../home/Cards.js";
import FormPasaje from "../home/FormPasaj.js";

function Inicio(){
    return (
        <>
            <Banners />
            <FormPasaje/>
            <Cards/>
        </>
    )
}

export default Inicio;