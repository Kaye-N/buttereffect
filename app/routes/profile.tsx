import type { MetaFunction } from "@remix-run/node";
import * as css from './profile.module.css';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Profile() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div className="title">
        <div className={css.boxborder}> {/* Change this to css.boxborder */}
            <img 
                id="image"
                src= '/welcomeimage.jpg'
            />
        </div>
      </div>
    </div>
  );
}
