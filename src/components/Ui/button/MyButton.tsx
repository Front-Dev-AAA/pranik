import classes from './MyButton.module.css';


const MyButton = ({children, ...props}: any) => {
    return (
        <button  type='submit' className={classes.myBtn} {...props}>
            {children}
        </button>
    );
}

export default MyButton;
