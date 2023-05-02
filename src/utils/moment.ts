function secondsToHms(d: number) {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor(d % 3600 / 60);
    let s = Math.floor(d % 3600 % 60);

    let hDisplay = h > 0 ? h + (":") : "";
    let mDisplay = m > 0 ? m < 10 ? `${"0" + m + ':'}` : `${m + ':'}` : "";
    let sDisplay = s > 0 ? s + ("") : "";
    return hDisplay + mDisplay + sDisplay;
}

export default secondsToHms 