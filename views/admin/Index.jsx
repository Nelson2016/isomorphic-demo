import React from 'react';

import styles from '../../public/less/app.less';

import helloWorld from '../../public/images/hello-world.jpg';

class Index extends React.Component {

    render() {
        return <div>
            <p className={styles.article}>Hello World</p>
            <img src={helloWorld} alt="hello-world" className={styles.picture}/>
        </div>
    }

}

export default Index;