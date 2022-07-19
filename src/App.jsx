import { useState, useEffect } from "react";
import moment from "moment";
import AppContainer from "./components/AppContainer.jsx";
import FlipCard from "./components/FlipCard";

function App() {
  const releaseDate = moment(1660595760000);
  const [number, setNumber] = useState(
    moment.duration(releaseDate.diff(moment()))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber(moment.duration(releaseDate.diff(moment())));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppContainer>
      <FlipCard title="days">{number.days()}</FlipCard>
      <FlipCard title="hours">{number.hours()}</FlipCard>
      <FlipCard title="minutes">{number.minutes()}</FlipCard>
      <FlipCard title="seconds">{number.seconds()}</FlipCard>
    </AppContainer>
  );
}

export default App;
