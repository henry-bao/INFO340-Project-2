import Countdown from 'react-countdown';

export function Join(props) {
    let joinData = props.data;
    const Completionist = () => <span>This event has ended :(</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            if (days > 30) {
                return <span>There is more than one month to finish the goal!</span>;
            } else {
                // Render a countdown
                return (
                    <span>
                        There is {days} days {hours} hours {minutes} mins {seconds} seconds left
                    </span>
                );
            }
        }
    };

    let distance = props.distance;

    return (
        <div className="joinBox animate__animated animate__fadeInUp animate__slow">
            <Countdown date={Date.now() + distance} renderer={renderer} />
            <p>{joinData.contact}</p>
            <p>
                There are <strong>{joinData.people}</strong> people waiting for you!
            </p>
            <button className="btn btn-primary">Count me in!</button>
        </div>
    );
}
