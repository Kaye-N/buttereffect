import type { MetaFunction } from "@remix-run/node";

import styles from '~/styles/profile.css'
import welcomeimg from 'public/welcomeimage.jpg'

export const meta: MetaFunction = () => {
  return [
    { title: "Profile" },
    { name: "Profile webpage for description", content: "Welcome to Profile Page!" },
  ];
};

export default function Profile() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="title">
        <div className= "boxborder">
            <img 
                id="image"
                src= {welcomeimg}
                alt="welcome"
            />
        </div>
        <div id = 'text-box'>
          <p>This is where text will be</p>
        </div>
      </div>
    </div>
  );
}

export function links(){
  return [{rel: 'stylesheet', href: styles}]
}