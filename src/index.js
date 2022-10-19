import '../index.html';
import './style/owfont-regular.css';
import './style/style.css';
import { showTime } from "./modules/time.js";
import { showDate } from "./modules/date.js";
import { showGreeting } from "./modules/greeting.js";


showTime('.time');
showDate('.date');
showGreeting('.greeting');