# web-assignment-4

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
# Ans. getElementById select an element by id, getElementsByClassName selects elements by it's class name and return html collection of array(if there are multiple class with same name we can use index to access specific class), querySelector select first element of a css selector,  querySelectorAll selects all elements with matched selector and return nodeList

# 2. How do you create and insert a new element into the DOM?
# Ans. we can use document.createElement() to create new element and use append()/appendChild() to insert the element.

# 3. What is Event Bubbling? And how does it work?
# Ans. Event Bubbling is when an event starts on the element we click and then moves up to its parent elements. First if we clicked the chikd, (child) element runs its event. Then the event goes to its parent, then to the grandparent, and so on.

# 4. What is Event Delegation in JavaScript? Why is it useful?
# Ans. Event Delegation is a technique where we can add one event listener to a parent element instead of adding separate listeners to each child element. When a child is clicked the event moves up to the parent and the parent can detect which child was clicked. It reduces code and can increase performance.

# 5. What is the difference between preventDefault() and stopPropagation() methods?
# Ans. preventDefault() stops browser's default action for an event, for example when we submit a form the page refreshes automatically, preventDefault() can stop this action. stopPropagation() stops the event from spreading to other elements while bubbling.
