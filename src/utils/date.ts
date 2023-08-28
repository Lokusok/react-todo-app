export const getFormattedDate = (timestamp: number): string => {
  const dateObj: Date = new Date(timestamp);
  
  const nowDay = dateObj.getDate() > 10 ? dateObj.getDate() : '0' + dateObj.getDate();
  const nowMonth = dateObj.getMonth() > 10 ? dateObj.getMonth() + 1 : '0' + (dateObj.getMonth() + 1);
  const nowYear = dateObj.getFullYear();

  const dateFormatted: string = `${nowDay}.${nowMonth}.${nowYear}`;
  return dateFormatted;
};

export const getTomorrowISODate = (): string => {
  const nowDate = new Date();
  const tomorrowDate = new Date(nowDate.setDate(nowDate.getDate() + 1)).toISOString().slice(0, 10);
  return tomorrowDate;
};
