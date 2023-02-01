import { DetailsPreview } from './details-preview'

export function AppDetails() {
    return (
        <div className='app-details main-layout full'>
            <div className='flex'>
                <h1 className='details-heading'>Build & manage distributed teams like no one else.</h1>
                <DetailsPreview />
            </div>
        </div>
    )
}
