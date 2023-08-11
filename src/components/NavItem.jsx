// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { adminLogout } from '../store/slice/admin';
// import { providerLogout } from '../store/slice/provider';
import { userLogout } from '../store/slice/user';
import PropTypes from 'prop-types';




const NavItem = ({icon,name,path}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

  

    const handleRoute = () => {
        if (name === 'LOGOUT') {
            if (path === '/admin/login') {
                dispatch(adminLogout())
            }
            // else if (path === '/provider/login') {
            //     dispatch(providerLogout())
            // }
             else if (path === '/login') {
                dispatch(userLogout())
            }
        }
            navigate(`${path}`);

       
    }

    return(
        <>
            <div onClick={handleRoute} className="flex  items-center justify-between p-4 hover:bg-gray-400 cursor-pointer ">
                <p className="flex items-center space-x-2" href="/admin/brand-dashboard">
                    {icon}
                    <span className="text-black font-bold  ">{name}</span>
                </p>

            </div>
        </>
    )
};

NavItem.propTypes = {
    icon: PropTypes.object.isRequired, // Define the expected type and mark it as required
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired, // Define the expected type and mark it as required
  };

export default NavItem;