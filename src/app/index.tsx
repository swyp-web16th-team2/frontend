import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import "./css/globals.css"

import { LayoutWrapper } from './ui/LayoutWrapper'

import IndexPageView from '../pages/IndexPageView'

const App = () => {
    return (
        <RouterProvider router={createBrowserRouter([
            {
                path : "/",
                element : <LayoutWrapper/>,
                children : [
                    {
                        index : true,
                        element : <IndexPageView/>
                    }
                ]
            }
        ])} />
    )
}

export default App