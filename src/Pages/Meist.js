import { useState } from 'react';

function Meist() {
    const [kontakt, n2itaKontakt] = useState('');
    const tootajad = [
        {nimi: 'Kaul', telefon: '333333'},
        {nimi: 'Peeter', telefon: '44444'},
        {nimi: 'Juula', telefon: '55555555'}
    ]

    return ( <div>
        <div>See on leht meist</div>
        <div>Siit leiad kõik vajaliku info meie kohta</div>
        <div>Meie töötajad:</div>
        <br />
        <div>{tootajad.map(tootaja =>
            <div>
                <div>{tootaja.nimi}</div>
                <button onClick={() => n2itaKontakt(tootaja.telefon)}>Võta ühendust</button>
                <br /><br />
            </div>
            )}
        </div>
{/*         <div>Kaul</div>
        <button onClick={() => n2itaKontakt('333333')}>Võta ühendust</button>
        <div>Peeter</div>
        <button onClick={() => n2itaKontakt('44444')}>Võta ühendust</button>
        <div>Juula</div>
        <button onClick={() => n2itaKontakt('55555555')}>Võta ühendust</button>
        <br /><br /> */}
        { kontakt !== '' && <div>Tema kontakt: {kontakt}</div>}

    </div> );
}

export default Meist;
