import './App.css';
import ParticlesBg from 'particles-bg'
import React from 'react';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import { Component, useCallback } from "react";

const setUpCalirifySettings = (imgURL) => {
  const PAT = 'e33852631f804097abb0f2fdbbf135e9';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'lietuvis_kalba';
  const APP_ID = 'face_recognition_test';
  // Change these to whatever model and image URL you want to use
  const MODEL_ID = 'face-detection'; //COLOR_MODEL
  const IMAGE_URL = imgURL;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imgURL: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imgURL: this.state.input });

    fetch("https://api.clarifai.com/v2/models/" + 'face-detection' + "/outputs", setUpCalirifySettings(this.state.input))
      .then(response => response.json())
      .then(response => {
        console.log("hi", response.outputs[0].data.regions[0].region_info.bounding_box)
      })

      .catch(error => console.log('error', error));
    console.log("click");

    console.log(this.state.input);
  }

  render() {

    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <FaceRecognition imgURL={this.state.imgURL} />
      </div>
    );
  }
}

export default App;
