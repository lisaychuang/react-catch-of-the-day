import React from 'react'; // always need to import React into components
import { format } from 'util';
import { getFunName } from '../helpers';

// create a class with Capitalized cases
// every class needs a render() method to render
class StorePicker extends React.Component {
    // create an empty Ref to store input data.
    myInput = React.createRef();

    // create a component property, set to => function in order to bind `this`
    goToStore = (e) => {
        // stop the form from submitting
        e.preventDefault(); 
        // get text from input
        const storeName = this.myInput.value.value;
        // change the route path to /store/input-value without REFRESHING the page
        this.props.history.push(`/store/${storeName}`);
    };
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
            { /* in React, className should be used instead of class */ }
                <h2>Please Enter A Store</h2>
                <input 
                    type="text" 
                    ref={this.myInput}
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                    />
                <button type="submit">Visit Store -> </button>
            </form>
        ) 
    }
}

// must export components for use in other files
export default StorePicker;