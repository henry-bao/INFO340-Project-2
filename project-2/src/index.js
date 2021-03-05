import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
ReactDOM.render(
    <App data={sample}/>,
  document.getElementById('root')
);

