import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { pageActions } from "../Redux/Actions";

export default function useRecordsPerPage() {
    const recordsPerPage = useSelector((state) => state.recordsPerPage);
    const dispatch = useDispatch();

    const changeRecordsPerPage = bindActionCreators(pageActions, dispatch).changeRecordsPerPage;

    return {
        recordsPerPage: recordsPerPage,
        changeRecordsPerPage: changeRecordsPerPage
    };
}