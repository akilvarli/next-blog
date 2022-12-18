import React from "react";

function DarkTheme() {
  return (
    <style jsx global>
      {`
        :root {
          --background-color: rgb(27, 22, 22);
          --link-color: rgb(170, 173, 26);
          --text-color: white;
        }
      `}
    </style>
  );
}

export default DarkTheme;
