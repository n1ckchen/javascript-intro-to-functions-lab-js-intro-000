const shout = (string) => {
  return string.toUpperCase();
};

function whisper(string) {
  return string.toLowerCase();
};

function logShout(string) {
  const newString = string.toUpperCase();
  console.log(newString);
};

function logWhisper(string) {
  const newString = string.toLowerCase();
  console.log(newString);
}
