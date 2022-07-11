import { useState } from "react";

function Kontakt() {
    const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
    const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
    const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

    return ( <div>
        <div>See on kontaktide leht</div>
        <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
        {n2itaTelKristiine && <div>32253424</div>}
        <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Ülemiste keskus</div>
        {n2itaTelTasku && <div>322534245</div>}
        <div onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Tasku keskus</div>
        {n2itaTelYlemiste && <div>322534247</div>}
    </div> );
}

export default Kontakt;