export function CardDeck(props) {
    let cardList = props.data.map((element) => {
        let card = <Card data = {element} key = {element.id}/>
        return card;
    })
    return (
        <div className="card-deck">
            {cardList}
        </div>
    );
}

function Card(props) {
    let database = props.data;
    return (
        <div className="card mb-4" onClick={clickAnimation}>
            <img className="card-img-top" src={database.img} alt={database.title} />
            <div className="card-body">
                <div className="row">
                    <h2 className="card-title col-8">{database.title}</h2>
                    <h3 className="card-title col-4 btn btn-success">{database.cate}</h3>
                </div>
                <div className="row">
                    <p className="card-text col-8">{database.description}</p>
                    <p className="card-text col-4 btn btn-warning">{database.people}</p>
                </div>
            </div>
        </div>
    ); 
}

const clickAnimation = (event) => {
    event.preventDefault();
    console.log(event.target);
    event.target.classList.add('animate__animated', "animate__bounceIn", "animate__slow");
}