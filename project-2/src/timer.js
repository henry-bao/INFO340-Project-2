import Countdown from 'react-countdown';

export function CountdownTimer(props) {
    const Completionist = () => <span>This event has ended :(</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>There is {days} days {hours} hours {minutes} mins {seconds} seconds left</span>
        }
    };

    let distance = props.distance;

    return (
        <div className="Timer">
            <Countdown
                date={Date.now() + distance}
                renderer={renderer}
            />
        </div>
    )
}