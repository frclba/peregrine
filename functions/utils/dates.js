module.exports.getDayDiff = (start, end) => {
  let timeDiff = new Date(start).getTime() - new Date(end).getTime();
  let dayDiff = timeDiff / (1000 * 3600 * 24);
  return Math.floor(dayDiff);
};
