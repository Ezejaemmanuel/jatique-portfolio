"use client";
export function calculateDateDifferences(inputDate: string): { years: number, yearsWithMonthsDecimal: number, totalMonths: number, weeks: number, days: number } {
  
  const startDate = new Date(inputDate);
  const currentDate = new Date();

  // Ensure the input date is valid
  if (isNaN(startDate.getTime())) {
    throw new Error('Invalid date format. Please use "YYYY-MM-DD".');
  }

  // Calculate difference in total days
  const differenceInTime = currentDate.getTime() - startDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // Calculate total months and then derive years and the decimal part for months
  const totalMonths = Math.floor(differenceInDays / 30.4375);
  const years = Math.floor(totalMonths / 12);
  const monthsAfterYears = totalMonths % 12;
  const yearsWithMonthsDecimal = parseFloat((years + monthsAfterYears / 12).toFixed(1));

  // Calculate weeks and days from the remaining days after subtracting the full years and months
  const daysAfterMonths = differenceInDays - (totalMonths * 30.4375);
  const weeks = Math.floor(daysAfterMonths / 7);
  const days = Math.floor(daysAfterMonths % 7);

  console.log(`${years} years // Exact number of years without considering the months`);
  console.log(`${yearsWithMonthsDecimal} years // Number of years including months as a decimal`);
  console.log(`${totalMonths} months // Total number of months including those in the years`);
  console.log(`${weeks} weeks // Number of weeks after accounting for years and months`);
  console.log(`${days} days // Number of days after accounting for years, months, and weeks`);

  return { years, yearsWithMonthsDecimal, totalMonths, weeks, days };
}