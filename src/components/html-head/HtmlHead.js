import { Helmet } from 'react-helmet-async';
import React from 'react';

const HtmlHead = ({ title = '', description = '', children = null }) => {
    return (
        <Helmet>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {children && children}
        </Helmet>
    );
};
export default HtmlHead;
