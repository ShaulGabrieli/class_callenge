export function AppFooter() {
    return (
        <div className='app-footer main-layout full'>
            <div className='flex space-between align-center'>
                <div className='flex align-center'>
                    <div className='left-section flex column'>
                        <h1 className='logo'>myteam</h1>
                        <div>
                            <a className='nav-btn'>home</a>
                            <a className='nav-btn'>about</a>
                        </div>
                        {/* <p className='address'>987 Hillcrest Lane Irvine, CA California 92714 Call Us : 949-833-7432</p> */}
                    </div>
                </div>
                <div className='nav-right-section flex align-center'></div>
            </div>
        </div>
    )
}
