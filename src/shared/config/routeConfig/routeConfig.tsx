import { RouteProps } from 'react-router-dom'
import { MainPageAsync } from 'pages/MainPage'
import { AboutPageAsync } from 'pages/AboutPage'

// нужно закинуть весь файл на уровень app
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageAsync />
    }
}
