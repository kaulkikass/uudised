import { useRef, useState } from "react";

function LisaUudis() {
    const uudiseRef = useRef();
    const [s6num, uuendaS6num] = useState('');

    const lisaUusUudis = () => {
        let uudised = localStorage.getItem('uudised');
        uudised = JSON.parse(uudised) || [];
        uudised.push(uudiseRef.current.value);
        uudised = JSON.stringify(uudised);
        localStorage.setItem("uudised", uudised);

    }

    const kontrolli = () => {
        uuendaS6num("");
        if (uudiseRef.current.value.charAt(0) === uudiseRef.current.value.toLowerCase()) {
            uuendaS6num("Sisestasid uudise esimese tähe väikse tähena, palun paranda.");
        } 
            

        if (uudiseRef.current.value.includes('  ')) {
            uuendaS6num('Sisestasid 2 tühikut, palun paranda!')
        } 
    }

    return ( 
    <div>
    <div>{s6num}</div>
        <label>Uudise nimi</label><br />
        <input onChange={kontrolli} ref={uudiseRef} type="text" /> <br />
        <button onClick={() => lisaUusUudis()}>Lisa uudis</button>
    </div> 
    );
}

export default LisaUudis;