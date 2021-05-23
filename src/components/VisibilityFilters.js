import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { SET_FILTER } from "../redux/actionTypes";
import * as allActions from "../redux/actions";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={
              () => {
                setFilter(currentFilter);
              } /** waiting for setFilter handler*/
            }
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

const reset = (filter) => ({ type: SET_FILTER, payload: { filter } });
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    setFilter: (filter) => dispatch(reset(filter)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilters);

//export default connect(mapStateToProps, allActions)(VisibilityFilters);
