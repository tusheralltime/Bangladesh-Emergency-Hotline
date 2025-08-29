# Bangladesh Emergency Hotline 💗

**Made by Tusher Molla**

This website provides various **emergency hotline numbers** in Bangladesh.

---

## 📌 Navbar Contains

- ❤️ Heart Count
- 🪙 Coin Count (Default: 100)
- 📋 Copy Count

---

## 💗 Functionality

- ❤️ **Heart Button** → Increases Heart Count in Navbar.
- 📋 **Copy Button** → Copies helpline number to clipboard, increases Copy Count, and shows an alert.
- 📞 **Call Button** → Deducts 20 coins, shows alert with Service Name + Number, and saves it into Call History with timestamp.
- 🕑 **Call History Section** → Displays Service Name, Number, and Time of call (latest on top).
- 🧹 **Clear History Button** → Clears all call history.
- ⚠️ **Coin Rule**: If coins < 20, user cannot make a call (shows alert “Finished coins! Please recharge.”).

---

## 💗 Features

- ✅ Fully Responsive (Mobile Friendly)
- ✅ Emergency Helpline Cards with Title, Number, Buttons
- ✅ Navbar with Heart, Coin & Copy Counter
- ✅ Event Delegation used for better performance
- ✅ Call History with Clear option

---

## 🛠️ Technology Stack

- HTML
- Tailwind CSS + DaisyUI
- JavaScript (Vanilla)

---

## ❓ Assignment Questions & Answers

### 1. Difference between `getElementById`, `getElementsByClassName`, `querySelector`, `querySelectorAll`

- **getElementById** → Selects one element by unique id.
- **getElementsByClassName** → Selects all elements with same class (returns HTMLCollection).
- **querySelector** → Selects first matching element using CSS selector.
- **querySelectorAll** → Selects all matching elements using CSS selector (returns NodeList).

---

### 2. How to create and insert a new Element into the DOM?

```javascript
const div = document.createElement("div");
div.className = "bg-gray-100 p-3 rounded-md";
div.innerText = "Hello World!";
document.body.appendChild(div);
```

### 3. What is Event Bubbling and how does it work?
Event Bubbling হলো এমন একটি process যেখানে কোনো event সবার আগে target element এ fire হয়, তারপর তার parent, তারপর document পর্যন্ত propagate করে।

উদাহরণ: Button → Div → Body → Document

👉 এর সাহায্যে Event Delegation কাজ করে।

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation মানে হলো parent element এ একটা event listener দেওয়া, আর সেটা bubbling এর মাধ্যমে child elements এর event detect করতে পারে।

কেন দরকারি?

✅ Performance ভালো হয় (কম listener)

✅ Dynamic elements এও কাজ করে

✅ কোড পরিষ্কার ও maintainable হয়

### 5. Difference between preventDefault() and stopPropagation()
preventDefault() → Browser এর default behavior বন্ধ করে।
উদাহরণ: Markdown style link [Click me](#) এ click করলে navigation বন্ধ করা যায়।

stopPropagation() → Event bubbling বা capturing বন্ধ করে।
উদাহরণ: Button এ click করলে parent div এর event fire হবে না।


