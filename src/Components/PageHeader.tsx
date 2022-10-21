import {IoMdArrowBack} from 'react-icons/io'
import { useNavigate, useParams } from "react-router-dom";

function PageHeader() {
    const navigate = useNavigate();
    let { username } = useParams();

    return (
        <div className="header">
          <div className="top_bar">
            <IoMdArrowBack onClick={() => navigate(-1)} size={25} className='top_bar_icons'/>
            <p className='top_page_name'>{username ? '@'+username : 'Favorites'}</p>
          </div>
        </div>
      );
}

export default PageHeader;