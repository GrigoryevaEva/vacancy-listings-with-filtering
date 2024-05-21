import { createHashRouter, RouterProvider} from 'react-router-dom';

import { ErrorPage } from '../../pages/Errorpage';
import { HomePage } from '../../pages/HomePage';

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
