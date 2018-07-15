import React from 'react'; // always need to import React into components
import { format } from 'util';

// create a class with Capitalized cases
// every class needs a render() method to render
class StorePicker extends React.Component {
    render(){
        return (
            <form className="store-selector">
            { /* in React, className should be used instead of class */ }
                <h2>Please Enter A Store</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store -> </button>
            </form>
        ) 
    }
}

// must export components for use in other files
export default StorePicker;