import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { pageActions } from "../Redux/Actions";

export default function useCurrentPage() {
    const currentPage = useSelector((state) => state.currentPage);
    const dispatch = useDispatch();

    const changePage = bindActionCreators(pageActions, dispatch).changePage;

    return {
        currentPage: currentPage,
        changePage: changePage
    };
}