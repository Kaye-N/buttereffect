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
        <div id="box">
            <div id="text">
                <p>This is what text looks like. Lorem ipsum dore rerum.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{rel: 'stylesheet', href: styles}];
}