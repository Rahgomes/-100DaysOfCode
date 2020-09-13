import React from 'react';

export function ChildrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}