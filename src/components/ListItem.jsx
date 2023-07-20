/* eslint-disable react/prop-types */
import IconCheck from "./icons/IconCheck";
const ListITem = ({ listText}) => {
    return (
        <div>
            <div className="flex gap-3 mb-2.5">
                <div>
                    <IconCheck />
                </div>
                <div>
                    <p>{listText}</p>
                </div>
            </div>
        </div>
    );
};
export default ListITem;
