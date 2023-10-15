export const convertMinutesToHoursAndMinutes = (minutes = 0) => {
  const hours = Math.floor(minutes / 60);
  const minutesRemaining = minutes % 60;

  return `${hours} hours and ${minutesRemaining} minutes`;
};
