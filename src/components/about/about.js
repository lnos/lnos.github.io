import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
          <div className="bio">
            <h3 className="bio-title">Bio</h3>
            <div className="border"></div>
            <p className="bio-contents">Penguins (order Sphenisciformes, family Spheniscidae) are a group of aquatic, flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos penguin, found north of the equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage, and their wings have evolved into flippers. Most penguins feed on krill, fish, squid and other forms of sea life caught while swimming underwater. They spend about half of their lives on land and half in the oceans.</p>
          </div>
        );
      }
}

export default About;