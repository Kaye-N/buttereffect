import type { MetaFunction } from "@remix-run/node";
import styles from 'app/styles/begin.css'

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
        <div className="box">
          
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: styles}];
}