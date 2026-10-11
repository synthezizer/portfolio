const myTime = 'America/Los_Angeles';

const today = new Date;
const targetDateString = `${today.toISOString().split('T')[0]}T19:00:00`;

const targetDate = new Date(new Date(targetDateString).toLocaleString("en-US", { timeZone: myTime }));

const visitorTime = { hour: 'numeric', minute: '2-digit', timeZoneName: 'short' };
const formatedTime = targetDate.toLocaleTimeString([], visitorTime);

document.getElementById('timezone').textContent = formatedTime;