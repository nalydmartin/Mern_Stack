import React, { useState } from 'react';
import styles from './Tabs.module.css';


function Tabs({ items }) {

    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(i) {

        const { callBack } = items[i];
        if(typeof callBack === 'function') {
            callBack();
        }

        setActiveIndex(i);
    }

    return(
        <div>

            <div className={styles.headers}>

                {items.map((item, i) => {
                    return (
                        <div key={i}  className={styles.header + (i === activeIndex ? ' ' + styles.active: ' ')} 
                        onClick={() => handleClick(i)}
                        >
                            {item.label}
                        </div>
                    )
                })}

            </div>

            <div className={styles.content}>
                {items[activeIndex].content}
            </div>
        </div>
    )
}




export default Tabs;