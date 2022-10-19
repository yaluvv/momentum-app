import '../index.html';
import './style/owfont-regular.css';
import './style/style.css';
import { showTime } from "./modules/time.js";
import { showDate } from "./modules/date.js";
import { showGreeting } from "./modules/greeting.js";
import { showName } from "./modules/name.js";
import { setBg } from "./modules/slider.js";
import { getQuote } from "./modules/quotes.js";
import { showWeather } from "./modules/weather.js";

showTime('.time');
showDate('.date');
showGreeting('.greeting');
showName('.name');
setBg();
getQuote();
showWeather('Tula');
