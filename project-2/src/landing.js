import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function LandingPage() {
    let history = useHistory();

    function changePage() {
        history.push('/main');
    }

    return (
        <body class="landing">
            <main>
                <h1>Goal Husky!</h1>

                <span onClick={changePage}>
                    <NavLink className="splashButton" to="/main">
                        Find like-minded people to complete your goals with!
                    </NavLink>
                </span>

                <div id="bgm"></div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </main>
        </body>
    );
}
