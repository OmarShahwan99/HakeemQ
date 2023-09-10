import classes from './DashHeader.module.css';
import Logo from '../../logo/Logo';
import Bar from '../../layout/NavigationsBar/Bar';

const DashHeader = (props) => {
    return (
        <div className={classes.header}>
            <Logo />
            <Bar onClick={props.onClick} />
        </div>
    )
}

export default DashHeader;