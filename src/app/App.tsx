import React, { Suspense, useEffect } from 'react'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { classNames } from 'shared/lib/helpers/classNames'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
    const { theme } = useTheme()

    useEffect(() => {
        console.log(__IS_DEV__)
    })

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
