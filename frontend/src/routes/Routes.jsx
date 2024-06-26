import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/general/Home';
import PageNotFound from '../pages/general/PageNotFound';
import Layout from '../components/general/Layout';
import LoginTenant from '../pages/tenant/LoginTenant';
import RegisterTenant from '../pages/tenant/RegisterTenant';
import TenantAuthenticated from '../components/tenant/TenantAuthenticated';
import LandlordAuthenticated from '../components/landlord/LandlordAuthenticated.jsx';
import FindRent from '../pages/tenant/FindRent';
import Account from '../pages/tenant/Account';
import PersonalDetails from '../pages/tenant/PersonalDetails';
import PasswordSettings from '../pages/tenant/PasswordSettings';

import LandlordPersonalDetails from '../pages/landlord/PersonalDetails.jsx';
import LandlordPasswordSettings from '../pages/landlord/PasswordSettings.jsx';
import LandlordAccount from '../pages/landlord/Account.jsx';
import ListProperty from '../pages/landlord/ListProperty.jsx';

import RegisterLandlord from '../pages/landlord/RegisterLandlord.jsx';
import LoginLandlord from '../pages/landlord/LoginLandlord.jsx';
import PropertyDetails from '../pages/general/PropertyDetails.jsx';

//loader
import GetPropertyListLoader from '../services/loaders/getPropertyListLoader.js';
import ListedProperty from '../pages/landlord/ListedProperty.jsx';

const{GetPropertyList,GetPropertyConstants,GetLandlordProperty}=GetPropertyListLoader();

export const Routes=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'home',
                element:<Home/>,
                loader:GetPropertyList
            },
            {
                path:'/',
                element:<Navigate to={'home'}/>
            },
            {
                path:'tenant',
                element:<TenantAuthenticated/>,
                children:[
                    {
                        path:'',
                        element:<Navigate to={'findrent'}/>
                    },
                    {
                        path:'findrent',
                        element:<FindRent/>,
                        loader:GetPropertyList
                    },
                    {
                        path:'account',
                        element:<Account/>,
                    },
                    {
                        path:'account/personal-details',
                        element:<PersonalDetails/>
                    },
                    {
                        path:'account/password-settings',
                        element:<PasswordSettings/>
                    },
                ]
            },
            {
                path:'landlord',
                element:<LandlordAuthenticated/>,
                children:[
                    {
                        path:'',
                        element:<Navigate to={'listedproperty'}/>
                    },
                    {
                        path:'listproperty',
                        element:<ListProperty/>,
                        loader:GetPropertyConstants
                    },
                    {
                        path:'listedproperty',
                        element:<ListedProperty/>,
                        loader:GetLandlordProperty
                    },
                    {
                        path:'account',
                        element:<LandlordAccount/>,
                    },
                    {
                        path:'account/personal-details',
                        element:<LandlordPersonalDetails/>
                    },
                    {
                        path:'account/password-settings',
                        element:<LandlordPasswordSettings/>
                    },
                ]

            },
            {
                path:'/property/propertydetails/:propertyId',
                element:<PropertyDetails/>
            },
            {
                path:'*',
                element:<PageNotFound/>
            }
        ]
    },
    {
        path:'/login-tenant',
        element:<LoginTenant/>
    },
    {
        path:'/register-tenant',
        element:<RegisterTenant/>,
    },
    {
        path:'/login-landlord',
        element:<LoginLandlord/>
    },
    {
        path:'/register-landlord',
        element:<RegisterLandlord/>,
    }
])

