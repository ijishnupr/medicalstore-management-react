import { useSelector } from "react-redux"
import List from "../listview"
import { Fragment } from "react";
import Header from "../Header";
function Searchpage() {
    var val = useSelector(store => store.search)
    return <Fragment>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <div className="col">

                    {val.map((list) => <p><List list={list} /></p>)}
                </div>
            </div>
        </div>
    </Fragment>
}
export default Searchpage;