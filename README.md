# Set up Font and Color
- Font - Google Font (Jost)
- Color - <a>https://tinyurl.com/2f6wr2vd</a>

# React Icon
```npm install react-icons --save```

# CSS tailwind
- <b>fixed</b> positions the element relative to the viewport, ensuring it stays in the same position even when the user scrolls.
- <b>top-0, right-0, and left-0</b> set the element's distance from the top, right, and left edges of the viewport respectively, making the element span the entire width of the viewport at the top.

# NAV Bar 
- On Medium device
- On Small device

# Banner
- First writtern the code in Home.jsx 
- Shifted the code to Banner.jsx and added arguments

# Scrolling Effect
```npm i react-scroll```

# Context API
- Implemented signin and signout routes, In responsive aswell.
- added and removed token on signin/signout.
- display signin/signout button in the presence of token.

# User add via Signup
- implemented user add when give payload in signup
- restricted access to '/activities' and '/products' page if the user is not signed in

# Implementing add to cart
- "dispatch" refers to the action of sending a specific type of action (an object describing a state change) to the reducer function.

- dispatch is a function provided by the useReducer hook in React. It is used to send actions to the reducer function, which then updates the state based on the action type and payload.

- In the context of useReducer, actions are objects that describe the type of state change to be performed and often include additional data needed for the change. An action typically has a type property and may include a payload property for extra information.
- For example:
 ``` {type: 'ADD_TO_CART', payload: product }```

- <b>type:</b> Identifies the kind of action (e.g., 'ADD_TO_CART'). <br>
 <b>payload:</b> Contains the data necessary for the action (e.g., the product to add to the cart).

- ### Implementation
1. context -> CartContext.jsx <br>
The dispatch function is used to send actions to the cartReducer function. When you call dispatch with an action object, it triggers the cartReducer function, passing the current state and the action object as parameters. The cartReducer then determines how to update the state based on the action type and returns the new state. This new state is then stored in the cart variable, which is provided to all components within the CartContext.Provider.

2. App.jsx <br>
wraps the main application component with CartProvider to provide the cart context to the entire application

3. ProductItem.jsx <br>
 addToCart function is defined within the Actions component. When the "Add to Cart" button is clicked, this function is invoked. Inside the addToCart function, the dispatch function from the CartContext is called with an object as an argument. This object contains a type property set to 'ADD_TO_CART', which indicates the type of action being performed, and a payload property set to the product object passed as a prop to the Actions component. This action is then dispatched to the reducer function, which handles state updates related to adding items to the cart.

4. Cart.jsx <br>
The key attribute in React is used to uniquely identify each element in a list. When rendering a list of elements using the map function, React requires each item to have a unique key prop to optimize the rendering process and efficiently update the DOM when the list changes. <br> 
<br>
In this case, the index parameter in the map function represents the index of the current item being processed in the cart array. By using index as the key, React can efficiently identify each item in the list. However, it's important to note that using the array index as keys is only recommended if: <br><br>

- The items in the list have a stable order.
- The list is static and will not be reordered or filtered. <br> <br>
If the items in the list can be reordered, filtered, or dynamically changed, it's better to use a unique identifier from the data itself as the key, such as an item ID, to ensure stability and avoid potential rendering issues.

5. NavBar.jsx <br>
{cart.length} is used to dynamically display the number of items in the cart, ensuring the icon badge updates in real-time based on the current number of items.