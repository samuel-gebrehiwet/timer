// Get the command line arguments excluding the first two (node path and script name)
const args = process.argv.slice(2);

// Convert arguments to numbers and filter out non-numeric and negative values
const times = args
  .map(Number)
  .filter(time => !isNaN(time) && time >= 0);

// Schedule alarms
times.forEach(time => {
  if (time === 0) {
    process.stdout.write('\x07'); // Make the system beep immediately
  } else {
    setTimeout(() => {
      process.stdout.write('\x07'); // Make the system beep after the specified time
    }, time * 1000); // Convert seconds to milliseconds
  }
});
