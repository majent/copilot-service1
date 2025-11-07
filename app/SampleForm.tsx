import { useState } from "react";

function F(props) {
  const [value, setValue] = useState(props.value || "");

  const h = (e) => {
    setValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    // 過度なネスト
    if (value) {
      if (value.length > 3) {
        if (value.indexOf("a") > -1) {
          alert("ok");
        } else {
          alert("no a");
        }
      } else {
        alert("too short");
      }
    } else {
      alert("empty");
    }
  };

  return (
    <body>
      <h2>Register form</h2>
      <form onSubmit={submit}>
        <div>
          <label>
            Input: <input value={value} onChange={h} />
          </label>
        </div>
        <button type="submit">Go</button>
      </form>
    </body>
  );
}

export default F;
