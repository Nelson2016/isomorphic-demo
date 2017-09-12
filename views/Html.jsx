import React from 'react';

class Html extends React.Component {

    render() {
        return <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Isomorphic Demo</title>
        </head>
        <body>

        <div id="root">
            {this.props.children}
        </div>

        {this.props.scriptTag}

        </body>
        </html>
    }

}

export default Html;