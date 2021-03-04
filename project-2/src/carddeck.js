export function CardDeck(props) {
    let dataBase = props.data;
    return (
        <div>
            <div className="card" onClick={clickAnimation}>
            <img className="card-img-top" src={dataBase[0].img} alt={dataBase[0].title} />
            <div className="card-body">
                <div className="row">
                    <h2 className="card-title float-start col-8">{dataBase[0].title}</h2>
                    <h3 className="card-title float-end col-4 btn btn-success">{dataBase[0].cate}</h3>
                </div>
                <div className="row">
                    <p className="card-text float-start col-8">{dataBase[0].description}</p>
                    <p className="card-text float-end col-4 btn btn-warning">{dataBase[0].people}</p>
                </div>
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