export const getCrittersLeavingThisMonth = crittersWithDates => crittersWithDates.reduce((acc, crit) => {
  const currentMonth = new Date().toLocaleDateString("default", { month: "long" });
  const endMonths = crit.month.split(/[-,]/g)

  if (endMonths[1] === currentMonth || (endMonths[3] && endMonths[3] === currentMonth)) acc.push(crit)

  return acc;
}, []);

 export const monthNameToNumMap = {
  "January": 0,
  "February": 1,
  "March": 2,
  "April": 3,
  "May": 4,
  "June": 5,
  "July": 6,
  "August": 7,
  "September": 8,
  "October": 9,
  "November": 10,
  "December": 11
}

export const getCrittersAvailableThisMonth = critterWithDates => {
  const thisMonth = new Date().getMonth();

  const crittersThisMonth = critterWithDates.filter(crit => {
    const monthRanges = crit.month.split(',');

    for (const range of monthRanges) {
      const [begin, end = ''] = range.split('-');
      const startRange = monthNameToNumMap[begin.trim()];
      const endRange = monthNameToNumMap[end.trim()];

      if (!endRange) {
        // some critters don't have an end range
        if (startRange === thisMonth) return true;

      } else if (startRange <= thisMonth && thisMonth <= endRange) {
        return true;
      }
    }

    return false;
  });

  return crittersThisMonth;
};
