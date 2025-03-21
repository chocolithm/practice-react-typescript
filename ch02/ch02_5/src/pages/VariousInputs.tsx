export default function VariousInputs() {
  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" placeholder="enter some textx" />
        <input type="password" placeholder="enter your password" />
        <input type="email" placeholder="enter your email" />
        <input type="range" min="0" max="5" />
        <input type="button" value="I'm a button" />
        <input type="checkbox" value="I'm a checkbox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  );
}
