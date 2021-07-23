# Simple Data Sharing Between React Components

## Links

* [Orignal Article](https://dev.to/omarqazidev/trying-to-simplify-data-sharing-between-components-5bke)
* [CodeSandBox for this Project](https://q94ww.csb.app/)

## Trying to Simplify Data Sharing Between Components

Is there a way to share data between multiple React components without using Redux, Context, or Props + Callbacks?

I am trying to find out.

In doing so, I purpose the following react-typescript code. 

<h3>DataObject</h3>

```typescript

class DataObject {
  public static data: string = "initial data";

  static setData(value: string) {
    DataObject.data = value;
  }

  static getData() {
    return DataObject.data;
  }
}

export default DataObject;
```


Every component that imports this <i>DataObject</i> gets the same <i>DataObject.data</i> variable, rather than new instances, since the data variable is static.

Each component can read the data. But I have not been successful in automatically re-rendering a component when the value of <i>DataObject.data</i> changes. Which is why, I am using buttons to re-render the components.


<h3>Component</h3>

```tsx
import React, { useState } from "react";
import DataObject from "./DataObject";

interface IComponentProps {
  componentTitle: string;
  textToSet: string;
}

const Component: React.FC<IComponentProps> = ({
  componentTitle,
  textToSet
}) => {
  const [state, setState] = useState("initial state");

  return (
    <div className="component">
      <div className="component-header">
        <h2>{componentTitle}</h2>
      </div>
      <button
        className="component-button"
        onClick={() => {
          DataObject.setData(textToSet);
        }}
      >
        Set Data
      </button>
      <button
        className="component-button"
        onClick={() => {
          setState(DataObject.getData());
        }}
      >
        Get Data
      </button>
      <div className="component-state">{state}</div>
    </div>
  );
};

export default Component;

```

Now, we simply use props to pass in the component title and the text that will be used to update <i>DataObject.data</i> by the component.

<h3>App</h3>

```tsx
import * as React from "react";
import Component from "./Component";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Data Sharing</h1>
      <Component
        componentTitle="Component One"
        textToSet="set from component one"
      />
      <Component
        componentTitle="Component Two"
        textToSet="set from component two"
      />
      <p>
        Components do not automatically re-render when data changes.
        <br />
        Press the 'Get Data Buttons' to re-render the component
      </p>
    </div>
  );
}
```

<h3>Index</h3>

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

Happy Coding!
