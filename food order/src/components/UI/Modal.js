import { Fragment} from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop =()=>{
    return (<div className={classes.backdrop}>

    </div>)
}
const Overlay =(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const Modal = (props)=>{
    const modalId = document.getElementById('modal');
    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, modalId )}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, modalId)}

        </Fragment>

    )
}
export default Modal;