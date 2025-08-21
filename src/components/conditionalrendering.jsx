import { useState } from "react";

function ConditionalRender() {
  const [show, setShow] = useState(true);

  let message = "";

  if (show) {
    message = "Hello! I am visible ?"
  } else {
    message = "Oops! I am hidden "
  }

  return (
    <div>
      <h2>Conditional Rendering</h2>

      <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShow(!show)}
      >
        Toggle Message
      </button>
      {message}
    </div>
  );
}

export default ConditionalRender;
