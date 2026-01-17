import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="harshu"
        age={21}
        img="https://images.unsplash.com/photo-1718743489190-1247db9f5305?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="samyak"
        age={20}
        img="https://images.unsplash.com/photo-1760563368807-ce05c0d30726?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="siddharth"
        age={16}
        img="https://images.unsplash.com/photo-1763198302381-ebffcec5410f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="piyush"
        age={69}
        img="https://plus.unsplash.com/premium_photo-1764832200613-ace48762160e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
    </div>
  );
};

export default App;
