export function AppHeader() {
    return (
        <nav className='app-header main-layout'>
            <div className='flex space-between align-center'>
                <div className='nav-left-section flex align-center'>
                    <h1 className='logo'>myteam</h1>
                    <a className='nav-btn'>home</a>
                    <a className='nav-btn'>about</a>
                </div>
                <div className='nav-right-section flex align-center'>
                    <button className='contact-us-btn'>contact us</button>
                </div>
            </div>
        </nav>
    )
}
