import classes from './MyInput.module.css';

const MyInput = ((props: any) => {
    return (
        <input  className={classes.myInp} {...props} />
    );
});

export default MyInput;