import React from 'react';
import yours_truly from './img/yours_truly.png';
import my_everything from './img/my_everything.png';
import dangerous_woman from './img/dangerous_woman.png';
import sweetener from './img/sweetener.png';
import thank_u_next from './img/thank_u_next.png';
import './App.css';

function App() {
  return (
    <div className="App-header">
    
    <h1>Brock's Ariana Grande Rankings</h1>

    <em><u>Albums Ranked</u></em>
    <ol>
      <img src={my_everything} className="Album-cover"/>
      <li>My Everything
        <ul>
          <li>Diverse range of songs that go hard in the paint</li>
          <li>Great featured artists</li>
        </ul>
      </li>
      <br />
      <img src={thank_u_next} className="Album-cover"/>
      <li>thank u, next
        <ul>
          <li>sass</li>
        </ul>
      </li>
      <br />
      <img src={yours_truly} className="Album-cover"/>
      <li>Yours Truly
        <ul>
          <li>Established the Ariana Style</li>
          <li>nostalgic</li>
        </ul>
      </li>
      <br />
      <img src={dangerous_woman} className="Album-cover"/>
      <li>Dangerous Woman
        <ul>
          <li>First half of album is fire</li>
          <li>Second half is poo</li>
          <li>Like if you're having a really good meal then you put the whole
            thing in to a blender with a bottle of a ketchup and 2 tablespoons
            of dirt</li>
        </ul>
      </li>
      <br />
      <img src={sweetener} className="Album-cover"/>
      <li>Sweetener
        <ul>
          <li>2 good songs</li>
          <li>13 tracks of random noises</li>
        </ul>
      </li>
    </ol>

    <em><u>Selected Top Songs</u></em>
    <ol>
      <li>break up with your girlfriend, i'm bored</li>
      <li>Santa Tell Me</li>
      <li>Dangerous Woman</li>
      <li>The Way</li>
      <li>no tears left to cry</li>
      <li>Bang Bang</li>
      <li>Break Your Heart Right Back</li>
      <li>thank u, next</li>
      <li>imagine</li>
      <li>Dangerous Woman</li>
      <li>Problem</li>
      <li>Love Me Harder</li>
      <li>Side To Side</li>
      <li>Santa Baby</li>
      <li>Tattooed Heart</li>
    </ol>

    <em><u>HELLO, ERIC!</u></em>
    <p>Created by Brock Davis using React.js</p>
    <p>github.com/brocktdavis</p>
  </div>
  );
}

export default App;
