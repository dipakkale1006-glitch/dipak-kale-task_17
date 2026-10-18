# Task 17: JavaScript - Division Using Promises

## About the Project
This project is developed as part of the **MERN Stack Course**. The objective of this assignment is to create a JavaScript program that performs mathematical division using **Promises** and **Arrow Functions**.

The program handles division operations asynchronously, correctly detecting edge cases such as division by zero and returning either the resolved numerical quotient or a descriptive error rejection.

---

## Core Implementation: Arrow Function with Promises

As required by the assignment guidelines:
1. The function is written using the **ES6 Arrow Function** syntax.
2. It accepts two numeric parameters: `num1` (numerator) and `num2` (denominator).
3. It returns a **`Promise`**:
   - If `num2 === 0`: Calls `reject()` with `"Division by zero is not allowed."`
   - Otherwise: Calls `resolve(num1 / num2)`.

```javascript
// Arrow function returning a Promise
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};
```

---

## Handling the Promise (`.then()` and `.catch()`)

To consume the Promise returned by `divideNumbers()`, `.then()` is used to process the resolved result and `.catch()` is used to catch and handle any rejected error messages:

```javascript
divideNumbers(10, 2)
    .then((result) => {
        console.log("Result: " + result);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });
```

---

## 5 Test Cases (Dummy Data)

The script executes 5 diverse test cases to thoroughly validate the logic:

| Case | Operation | Denominator Status | Promise State | Output |
| :--- | :--- | :--- | :--- | :--- |
| **Example 1** | `10 ÷ 2` | Valid (`2`) | **Resolved** | `Result: 5` |
| **Example 2** | `10 ÷ 0` | Zero (`0`) | **Rejected** | `Error: Division by zero is not allowed.` |
| **Example 3** | `45 ÷ 5` | Valid (`5`) | **Resolved** | `Result: 9` |
| **Example 4** | `-20 ÷ 4` | Valid (`4`) | **Resolved** | `Result: -5` |
| **Example 5** | `0 ÷ 7` | Valid (`7`) | **Resolved** | `Result: 0` |

---

## Console Output Sample

When running the project or inspecting the browser console, the following messages are logged:

```text
Example 1
Dividing 10 by 2
Result: 5

Example 2
Dividing 10 by 0...
Error: Division by zero is not allowed.

Example 3
Dividing 45 by 5
Result: 9

Example 4
Dividing -20 by 4
Result: -5

Example 5
Dividing 0 by 7
Result: 0
```

---

## Webpage Features

- **Interactive Promise Calculator**: Allows testing arbitrary numbers with custom numerators and denominators.
- **Visual Promise States**:
  - `Pending`: Blue status tag while calculating.
  - `Resolved`: Emerald green screen card displaying the result.
  - `Rejected`: Red screen card highlighting the division by zero error message.
- **Quick Preset Buttons**: Click to instantly test any of the 5 predefined examples.
- **5 Predefined Cases Grid**: Visual cards summarizing each test case with resolution status badges.
- **Console Output Preview**: Live terminal preview container on the page.

---

## Technologies Used

- **HTML5**: Semantic form inputs, headers, and cards layout
- **CSS3**: Modern cards, responsive grid, status badges, and color transitions
- **JavaScript (ES6)**: Arrow functions, Promises (`resolve`, `reject`), `.then()`, `.catch()`, and DOM event listeners

---

## Project Structure

Inside the `DIPAK KALE Task_17` folder:
- `index.html` – Webpage layout and calculator interface
- `style.css` – Modern styling with color-coded Promise state themes
- `script.js` – Arrow function returning Promise, 5 test cases runner, and DOM logic
- `README.md` – Project documentation, Promise lifecycle explanation, and testing guide

---

## How to Run & Test

1. Navigate to the `DIPAK KALE Task_17` folder.
2. Open `index.html` in any web browser (Google Chrome, Edge, Firefox, etc.).
3. **To view console output**:
   - Press **F12** $\to$ **Console** to see all 5 test cases executed.
4. **To test interactively**:
   - Enter `10` and `2`, click **Perform Division (Promise)** $\to$ screen turns green with `Result: 5`.
   - Enter `10` and `0`, click **Perform Division (Promise)** $\to$ screen turns red with `Error: Division by zero is not allowed.`.
   - Use the **Quick Test Cases** buttons to test other examples.

---

**Author:** Dipak Kale  
**Course:** MERN Stack Course
