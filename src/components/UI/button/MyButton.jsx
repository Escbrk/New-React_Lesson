import React from 'react';
import css from './MyButton.module.css';

export default function MyButton({children, ...props}) {
    return <button {...props} className={css.myBtn}>{children}</button>;
}
