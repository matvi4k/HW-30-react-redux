import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "../../redux/phoneBookSlice";
import "./Filter.css";

export function Filter() {
  const value = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter">
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(updateFilter(event.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {};
