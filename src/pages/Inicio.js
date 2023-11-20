import Banners from "../common/MainBanner";
import FormPasaje from "../home/FormPasaj.js";
import Cards from "../home/Cards.js";
import Elegirnos from "../home/Elegirnos.js";
import Lastblock from "../home/Lastblock.js";

function Inicio(){
    return (
        <>
            <Banners />
            <FormPasaje/>
            <Cards/>
            <Elegirnos/>
            <Lastblock/>
        </>
    )
}

export default Inicio;