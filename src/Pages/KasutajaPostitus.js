import {useParams, Link} from 'react-router-dom';
import { useEffect, useState } from "react";
function KasutajaPostitus() {
    const {kasutajaId} = useParams();
    const [postitused, uuendaPostitused] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json(res))
            .then (data => {
                //uuendaPostitused(data.filter(element => element.userId === Number(kasutajaId)))
                const result = data.filter(element => element.userId === Number(kasutajaId))
                uuendaPostitused(result);
            })
    }, []);
    return ( 
    <div>
        {postitused.map(element => <div><div><i>{element.userId}</i></div><div><u>{element.id}</u></div><div><b>{element.title}</b></div><div>{element.body}</div></div>)}
    </div> 
    );
}

export default KasutajaPostitus;

