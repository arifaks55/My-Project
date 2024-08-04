import React from 'react';
import Card from '../components/Card';

const Features = () => {
    return (
        <div className="row text-center">
            <Card iconClass="fa fa-cogs" title="Feature 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <Card iconClass="fa fa-cloud" title="Feature 2" description="Phasellus vehicula justo eget diam posuere sollicitudin eu tincidunt nulla." />
            <Card iconClass="fa fa-heart" title="Feature 3" description="Donec sed odio dui. Nulla vitae elit libero, a pharetra augue." />
        </div>
    );
};

export default Features;
