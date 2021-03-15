import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { capitalize } from './utils';
import { Join } from './Join';

export function DescriptionPage(props) {
    const sample = props.data;
    let descriptionTitle = useParams().title;
    let descriptionData = _.find(sample, { title: descriptionTitle });
    let descriptionIndex = _.indexOf(sample, descriptionData);

    const [redirectTo, setRedirectTo] = useState(descriptionTitle);
    const findNext = () => {
        let nextIndex = descriptionIndex + 1;
        if (nextIndex < sample.length) {
            let nextTitle = sample[nextIndex].title;
            setRedirectTo(nextTitle);
        } else {
            alert('Whoops!');
        }
    };
    const findPrevious = () => {
        let nextPrevious = descriptionIndex - 1;
        if (nextPrevious >= 0) {
            let nextTitle = sample[nextPrevious].title;
            setRedirectTo(nextTitle);
        } else {
            alert('Whoops!');
        }
    };

    if (redirectTo !== descriptionTitle) {
        let url = '/description/' + redirectTo;
        return <Redirect to={url} />;
    }

    let distance = descriptionData.date - Date.now();

    return (
        <div className="descriptionSection">
            <div className="descriptionBox">
                <div className="row">
                    <img
                        className="animate__animated animate__backInLeft animate__slow"
                        src={'../' + descriptionData.img}
                        alt={descriptionData.title}
                    />
                    <div className="animate__animated animate__backInRight animate__slower descriptionContent">
                        <span className="btn btn-success">{capitalize(descriptionData.cate)}</span>
                        <h2 className="title">{capitalize(descriptionData.title)}</h2>
                        <p>{capitalize(descriptionData.description)}</p>
                    </div>
                    <div className="animate__animated animate__fadeIn animate__slow icons row">
                        <i className="fas fa-chevron-circle-left" onClick={findPrevious}></i>
                        <i className="fas fa-chevron-circle-right" onClick={findNext}></i>
                    </div>
                </div>
            </div>
            <Join distance={distance} data={descriptionData} />
        </div>
    );
}
