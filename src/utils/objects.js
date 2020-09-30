export function checkProperties(obj) {
  for (let key in obj) {
    // trim past
    if (key === "exDate" || key === "paymentDate") {
      let date = new Date(obj[key]);
      let today = new Date(Date.now());
      let timeDiff = date.getTime() - today.getTime();
      let dayDiff = timeDiff / (1000 * 3600 * 24);
      if (Math.floor(dayDiff) <= 0) return false;
    }

    // trim empties
    if (!Boolean(obj[key])) return false;
  }

  return true;
}
