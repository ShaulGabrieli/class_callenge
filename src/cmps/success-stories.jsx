import { SuccessStoriesList } from "./success-stories-list";

export function SuccessStories(){
    return (
       <section className="success-stories main-layout full">
       <div className="flex column align-center">
         <h1 className="stories-heading">Delivering real results for top companies. Some of our <span className="heading-ending">success stories.</span></h1>
            <SuccessStoriesList />
       </div>

       </section>
    )
   
   }