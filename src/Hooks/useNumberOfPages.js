import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { pageActions } from "../Redux/Actions";

export default function useNumberOfPages(value) {
    const numberOfPages = useSelector((state) => state.numberOfPages);
    const dispatch = useDispatch();

    const changeNumberOfPages = bindActionCreators(pageActions, dispatch).changeNumberOfPages;

    if(value) {
        changeNumberOfPages(value);
    }


    return {
        numberOfPages: numberOfPages,
        changeNumberOfPages: changeNumberOfPages
    };
}

