import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        // this.setState({ error, errorInfo });
        // You can also log error info to an error reporting service here
    }

    render() {
        if (this.state.hasError) {
            return (
                <h4>{this.props.fallback}</h4>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;