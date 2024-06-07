# Access the application via this link below
https://bitwizards-project-cgc.onrender.com

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

# Implementation of AddToCart (latest)

- <b>CartContext.jsx</b> <br>
Apart from Initializing the cart state with existing data from local storage, <b>CartProvider</b> also ensures that any updates to the cart state are automatically synchronized with the local storage.<br>
<br>
The useReducer hook returns a dispatch function, which is used to send actions to the cartReducer. When these actions are dispatched, they trigger state updates in the cartReducer,<b> which in turn returns a new state.</b> After the state is updated, the <b>useEffect</b> hook is triggered due to the dependency on the cart state.<br>
<br>
Within the useEffect hook, the updated cart state is serialized using JSON.stringify and stored in the local storage with the key 'cart'. This ensures that the latest state of the cart is persisted in the local storage, allowing it to be retrieved and used again even after page reloads or component re-renders.

- <b>The case 'SET_CART':</b> return action.payload; is used to directly set the cart state to a specific value provided in the action.payload. This can be useful when initializing the cart from a saved state, such as when retrieving the cart contents from localStorage when the application first loads, or when syncing the cart with a server-side state. It ensures that the cart state in the application is updated to match the provided data, allowing for consistent and accurate cart management across sessions and different parts of the application.

- <b>return state.filter(item => item.id !== action.payload.id);</b>
This line filters the current state to remove the item that matches the id provided in action.payload. Here's a detailed breakdown:<br>
<br>
state.filter(item => item.id !== action.payload.id):
state.filter(...) creates a new array including only items that satisfy the given condition.
item.id !== action.payload.id is the condition used for filtering.<br>
1. It checks each item in the cart to see if its id is not equal to action.payload.id.
2. If an item's id does not match action.payload.id, it is included in the new array.
3. If an item's id matches action.payload.id, it is excluded from the new array.<br>
This effectively removes the item with the specified id from the cart.

- <b>Cart.jsx</b> <br>
<b>item Parameter:</b> <br>
1. item represents each individual element of the cart array during each iteration of the map function.
2. In this context, item contains the details of a product added to the cart, such as <b>id, title, price, quantity, and image.</b>
3. It allows us to access and render the properties of each product in the UI, such as displaying the product image, title, price, and quantity.<br>
<br>
<b>index Parameter:</b> <br>
1. index represents the index or position of the current item in the cart array during each iteration of the map function.
2. It starts from 0 for the first item and increments by 1 for each subsequent item.
3. index is primarily used to provide a unique key for each rendered item in React. This helps React efficiently identify and update elements in lists, especially when their order changes.
4. Additionally, index can be used for various purposes, such as applying specific styling or conditional logic based on the position of an item in the list.

- ### Implementation
1. CartContext (define CartContext and useReduce)
2. App.jsx (make it accessible to all the childrens)
3. NavBar.jsx (implement navigation and (display of number when adding cart) -> later)
4. Cart.jsx (set up the UI of addToCart)
5. ProductItem.jsx (implement addtocart button functionality)
