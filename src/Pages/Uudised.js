function Uudised() {
    const uudised = JSON.parse(localStorage.getItem('uudised')) || [];

    return ( <div>
        <div>See on leht uudistest</div>
        {uudised.length === 0 && <div>ühtegi uudist pole</div>}
        <div>{uudised.map(uudis => <div>{uudis}</div>)}</div>
    </div> );
}

export default Uudised;