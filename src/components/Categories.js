import React from 'react'
import { connect } from 'react-redux';
import { changeActive } from '../store/categories';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { useDispatch, useSelector } from 'react-redux';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { getRemoteData } from '../async-func/thunk';
import { useEffect } from 'react';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});
function Categories(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.categories);
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    useEffect(() => {

        dispatch(getRemoteData()).then(() => {
            dispatch(changeActive("electronics"));
        });
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (<>
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                {state.categories.map((element) => {
                    return <Tab key={element.name} label={element.name} onClick={() => { dispatch(changeActive(element.name)) }} />
                })}
            </Tabs>
        </Paper>
        <div style={{ marginLeft: '50%' }}>
        <div style={{fontSize:'38px',marginLeft:'20%'}}><h2>{state.activeCategory.name}</h2></div>
            <div style={{fontSize:'24px',marginLeft:'17%'}}><h2>{state.activeCategory.description}</h2></div>
        </div>
    </>
    )
}
// const mapStateToProps = (state) => {
//     return state.categories;
// }
// const mapDispatchToProps = {
//     changeActive,
//     getCategoryItems
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Categories);
export default Categories;