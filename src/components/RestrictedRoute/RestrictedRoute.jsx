import { useAuth } from '../../redux/hooks/useAuth';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// if isLoggedIn is true, redirect the page to a new route (phonebook)
// if isLoggedIn is false, display a placeholder component that prompts the user to login (register/login page)
