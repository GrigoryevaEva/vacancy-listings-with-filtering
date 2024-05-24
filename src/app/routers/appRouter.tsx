import { createHashRouter, RouterProvider} from 'react-router-dom';

import { ErrorPage } from '../../pages/Errorpage';
import { HomePage } from '../../pages/HomePage';

import '../styles/nullification.scss';
import '../styles/global.scss';

const router = createHashRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ]
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
