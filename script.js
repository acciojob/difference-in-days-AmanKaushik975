var dateDiffInDays = function (date1, date2) {
  //   write your code here
	  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    // Calculate the difference in milliseconds
    const diffMilliseconds = secondDate - firstDate;

    // Calculate the difference in days
    const diffDays = Math.round(diffMilliseconds / oneDay);

    return diffDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
