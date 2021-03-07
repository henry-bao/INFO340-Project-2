import _ from 'lodash';
import {Redirect} from 'react-router-dom';
import {useState} from 'react';
import {useParams} from "react-router-dom";
const sample = [
    {
        "id": 0,
        "title": "python",
        "cate": "Career",
        "description": "Self-Study Python",
        "img":"img/python.png",
        "people": 1
    },
    {
        "id": 1,
        "title": "guitar",
        "cate": "Hobby",
        "description": "Learn Guitar",
        "img":"img/guitar.png",
        "people": 3
    },
    {
        "id": 2,
        "title": "smash",
        "cate": "Hobby",
        "description": "Practice Smash Ultimate Movement Fundamentals",
        "img":"img/smash.png",
        "people": 16
    },
    {
      "id": 3,
      "title": "smash",
      "cate": "Hobby",
      "description": "Practice Smash Ultimate Movement Fundamentals",
      "img":"img/smash.png",
      "people": 16
    },
    {
      "id": 4,
      "title": "smash",
      "cate": "Hobby",
      "description": "Practice Smash Ultimate Movement Fundamentals",
      "img":"img/smash.png",
      "people": 16
    }
  ]
export function DescriptionPage(props) {
    let descriptionTitle = useParams().title;
    let descriptionData = _.find(sample, {title: descriptionTitle});
    let descriptionIndex = _.indexOf(sample, descriptionData);
    
    const [redirectTo, setRedirectTo] = useState(descriptionTitle);
    const findNext = () => {
        let nextIndex = descriptionIndex + 1;
        if (nextIndex <= sample.length) {
            let nextTitle = sample[nextIndex].title;
            setRedirectTo(nextTitle);
        } else {
            alert("Whoops!");
        }
    }
    const findPrevious = () => {
        let nextPrevious = descriptionIndex - 1;
        if (nextPrevious >= 0) {
            let nextTitle = sample[nextPrevious].title;
            setRedirectTo(nextTitle);
        } else {
            alert("Whoops!");
        }
    }

    if (redirectTo !== descriptionTitle) {
        let url = "/description/" + redirectTo;
        return (
          <Redirect to = {url}/>
        )
    }

    return (
        <div className="descriptionBox">
            <div className="row">
                <img className="animate__animated animate__backInLeft animate__slow" src={"../" + descriptionData.img} alt={descriptionData.title} />
                <div className="animate__animated animate__backInRight animate__slower descriptionContent">
                    <span className="btn btn-success">{descriptionData.cate}</span>
                    <h2 className="title">{descriptionData.title}</h2>
                    <p>{descriptionData.description}</p>
                    <p>There are <strong>{descriptionData.people}</strong> people waiting for you!</p>
                </div>
                <div className="animate__animated animate__fadeIn animate__slow icons row">
                    <i className="fas fa-chevron-circle-left" onClick={findPrevious}></i>
                    <i className="fas fa-chevron-circle-right" onClick={findNext}></i>
                </div>
            </div>
        </div>
    );
}