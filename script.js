// set footer years
document.getElementById('year')?.innerText = new Date().getFullYear();
document.getElementById('year2')?.innerText = new Date().getFullYear();
document.getElementById('year3')?.innerText = new Date().getFullYear();
document.getElementById('year4')?.innerText = new Date().getFullYear();

// Surprise page "Say Hi" button
const sayHi = document.getElementById('sayHi');
if (sayHi) {
  sayHi.addEventListener('click', () => {
    alert("Happy Birthday! 🎉🎂\nWishing you a wonderful year ahead.");
  });
}
