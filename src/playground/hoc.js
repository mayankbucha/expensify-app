import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // Higer order component is returned
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please dont share</p>}
            {// This will take every key value pairs on object and pass them down to props.
            // Takes the above props and pass them to the WrappedComponent. 
            }
            <WrappedComponent {...props}/>
        </div>
    );
}

// call the function with the component to wrap
// Can be called with multiple components to wrap
// This component will have access to redux store
const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view the info</p>)}   
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details." />, document.getElementById('app'));