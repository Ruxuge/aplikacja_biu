export default function useAddedAgo(unixTime) {
    let d = new Date();  // Gets the current time
    let nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    let seconds = nowTs - unixTime;

    // more that two days
    if (seconds > 2*24*3600) {
        return "a few days ago";
    }
    // a day
    if (seconds > 24*3600) {
        return "yesterday";
    }

    if (seconds > 3600) {
        return "a few hours ago";
    }
    if (seconds > 1800) {
        return "Half an hour ago";
    }
    if (seconds > 60) {
        return Math.floor(seconds/60) + " minutes ago";
    }
    if (seconds < 60) {
        return '0 seconds ago';
    }
}