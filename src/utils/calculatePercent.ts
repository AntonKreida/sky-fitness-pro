export const calculatePercentage = (count: number, total: number) => {
  if (count >= total) {
    return 100;
  }
  return Math.round((count / total) * 100);
};
