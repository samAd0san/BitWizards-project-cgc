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
- dispatch is a function provided by the useReducer hook in React. It is used to send actions to the reducer function, which then updates the state based on the action type and payload.

- In the context of useReducer, actions are objects that describe the type of state change to be performed and often include additional data needed for the change. An action typically has a type property and may include a payload property for extra information.
- For example:
 ``` {type: 'ADD_TO_CART', payload: product }```

- <b>type:</b> Identifies the kind of action (e.g., 'ADD_TO_CART'). <br>
 <b>payload:</b> Contains the data necessary for the action (e.g., the product to add to the cart).

1. context -> CartContext.jsx
2. App.jsx
3. ProductItem.jsx
4. Cart.jsx
5. NavBar.jsx