let marks =[45,78,98,32,67,88,56];

console.log(marks);

marks.push(100);
console.log(marks);

marks.unshift(42);
console.log(marks);

marks.shift();
console.log(marks);

console.log(marks[3]);
//------------------------------------------------------------
// Initial marks array
//let marks = [45, 78, 90, 32, 67, 88, 56];

// ---------- Array Basics ----------
console.log("Total elements:", marks.length);
console.log("First element:", marks[0]);
console.log("Last element:", marks[marks.length - 1]);

marks.push(70, 85);          // Add two marks at end
marks.unshift(40);           // Add one mark at beginning
marks.pop();                 // Remove last element
marks.shift();               // Remove first element

// ---------- Searching & Checking ----------
console.log("Includes 90:", marks.includes(90));
console.log("Index of 67:", marks.indexOf(67));
console.log("All passed:", marks.every(m => m >= 35));
console.log("Any failed:", marks.some(m => m < 35));

// ---------- Transformation ----------
let addedFive = marks.map(m => m + 5);
console.log("Marks +5:", addedFive);

let passedMarks = marks.filter(m => m >= 35);
let failedMarks = marks.filter(m => m < 35);

console.log("Passed:", passedMarks);
console.log("Failed:", failedMarks);

// ---------- Sorting & Reversing ----------
let asc = [...marks].sort((a, b) => a - b);
let desc = [...marks].sort((a, b) => b - a);
let reversed = [...marks].reverse();

console.log("Ascending:", asc);
console.log("Descending:", desc);
console.log("Reversed:", reversed);

// ---------- Aggregation ----------
let totalMarks = marks.reduce((sum, m) => sum + m, 0);
let highest = Math.max(...marks);
let lowest = Math.min(...marks);

console.log("Total:", totalMarks);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

// ---------- Iteration ----------
marks.forEach((mark, index) => {
    console.log(`Index ${index}: ${mark}`);
});

for (let mark of marks) {
    if (mark >= 35) {
        console.log("Passed mark:", mark);
    }
}

// ---------- DOM Functions ----------
function renderMarks(list) {
    let ul = document.getElementById("marksList");
    ul.textContent = "";

    list.forEach(mark => {
        let li = document.createElement("li");
        li.textContent = mark;
        ul.appendChild(li);
    });
}

// Initial render
renderMarks(marks);

// ---------- Button Functions ----------
function addMark() {
    let input = prompt("Enter new mark:");
    let value = Number(input);

    if (!isNaN(value)) {
        marks.push(value);
        renderMarks(marks);
        document.getElementById("output").textContent = "Mark added successfully.";
    } else {
        document.getElementById("output").textContent = "Invalid mark.";
    }
}

function showPassed() {
    let passed = marks.filter(m => m >= 35);
    renderMarks(passed);
    document.getElementById("output").textContent = "Passed Students: " + passed.join(", ");
}

function showFailed() {
    let failed = marks.filter(m => m < 35);
    renderMarks(failed);
    document.getElementById("output").textContent = "Failed Students: " + failed.join(", ");
}

function showTotal() {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let high = Math.max(...marks);
    let low = Math.min(...marks);

    document.getElementById("output").textContent =
        `Total Marks: ${total} | Highest: ${high} | Lowest: ${low}`;
}

