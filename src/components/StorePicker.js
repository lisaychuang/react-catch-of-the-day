import React from 'react'; // always need to import React into components

// create a class with Capitalized cases
// every class needs a render() method to render
class StorePicker extends React.Component {
    render(){
        return <p>I'm the store picker!!</p>
    }
}

// must export components for use in other files
export default StorePicker;