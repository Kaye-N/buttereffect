import type { MetaFunction } from "@remix-run/node";
import homepage from '~/styles/home.css'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div>
        <div className="welcome-image">
          <p id = 'Title'> This is the Homepage! 	&lt;3 </p>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: homepage}];
}