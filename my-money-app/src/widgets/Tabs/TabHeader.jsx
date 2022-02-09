import "./TabHeader.css";

import { connect } from 'react-redux'
import { setTab } from '../../store/actions/tabsActions'

function TabHeader(props) {
  const selected = props.tabId === props.target
  return (
    <li className={selected ? 'TabHeader-Selected' : 'TabHeader'} data-target={props.target} onClick={() =>{ 
      props.setTabIndex(props.target)
    }}>
      <button  class="styless-btn">
        <i className={props.icon}></i>
        {props.title}
      </button>
    </li>
  );
}

function mapStateToProps(state){
  return{
    tabId: state.tabs.tabIndex
  }
}

function mapDispatchToProps(dispatch){
  return{
    setTabIndex(index){
      dispatch(setTab(index))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
