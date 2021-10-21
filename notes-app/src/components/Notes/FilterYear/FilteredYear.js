import { useContext } from "react";
import AuthContext from "../../../store/auth-context";

const FilteredYear = props => {

    const context = useContext(AuthContext);

    const yearChangeHandler = event => {
        // props.onSelectedYear(event.target.value);
        context.onSelectedYear(event.target.value)
    }

    return (
        <select className="form-control" onChange={yearChangeHandler} value={props.selectedYear}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    )
} 

export default FilteredYear;