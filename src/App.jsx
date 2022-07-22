import { useState, useEffect } from "react";
import moment from "moment";
import AppContainer from "./components/AppContainer.jsx";
import FlipCard from "./components/FlipCard";

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function App() {
  const releaseDate = moment(1680595760000);
  const duration = moment.duration(releaseDate.diff(moment()));
  const [number, setNumber] = useState({
    seconds: duration.seconds(),
    minutes: duration.minutes(),
    hours: duration.hours(),
    days: duration.days(),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const duration = moment.duration(releaseDate.diff(moment()));
      setNumber({
        seconds: duration.seconds(),
        minutes: duration.minutes(),
        hours: duration.hours(),
        days: duration.days(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <AppContainer>
      <FlipCard title="days">{pad(number.days, 2)}</FlipCard>
      <FlipCard title="hours">{pad(number.hours, 2)}</FlipCard>
      <FlipCard title="minutes">{pad(number.minutes, 2)}</FlipCard>
      <FlipCard title="seconds">{pad(number.seconds, 2)}</FlipCard>
    </AppContainer>
  );
}

export default App;
