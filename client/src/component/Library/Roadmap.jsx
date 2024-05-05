import React from 'react'

const Roadmap = () => {

    const Roadmaps=[
        {
            sub:"C++",
            url:"https://drive.google.com/drive/folders/1xiNSTnWI1C94tR_Ci0kf8P7bTp1QjHDb",
    
        },
    
        {
            sub:"DSA",
            url:"https://drive.google.com/drive/folders/1xiNSTnWI1C94tR_Ci0kf8P7bTp1QjHDb",
    
        },
    
    
        {
            sub:"WEB DEVELOPMENT",
            url:"https://drive.google.com/drive/folders/1xiNSTnWI1C94tR_Ci0kf8P7bTp1QjHDb",
    
        },
    
        {
            sub:"JAVA DEVELOPMENT",
            url:"https://drive.google.com/drive/folders/1xiNSTnWI1C94tR_Ci0kf8P7bTp1QjHDb",
    
        },
    
        {
            sub:"PYTHON",
            url:"https://drive.google.com/drive/folders/1xiNSTnWI1C94tR_Ci0kf8P7bTp1QjHDb",
        },
    ]

  return (
    <><div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            Roadmaps.map((row,index)=>{
                return (<div key={index} className='w-[75vw] sm:w-[25vw]'>
                    <div className="card"><h3 className='p-2'>{row.sub} </h3>
                <div className="card-header">
                  <h5 className="card-title">Download PDF </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">Click the button below to download the PDF document.</p>
                  <a href={row.url} className="btn text-white" style={{ backgroundColor: '#f69031' }}>Download</a>
                </div>
              </div>
    
                </div>)
            
        })
    }
    </div></>
  )
}

export default Roadmap