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
      <div className="title">
        <div className="welcome-image">

        </div>

      </div>
    </div>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: homepage}];
}