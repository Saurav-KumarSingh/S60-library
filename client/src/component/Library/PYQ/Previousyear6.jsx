import React from 'react'

const Previousyear6 = () => {

    const previousyear6=[
        {
            sub:"Artificial Intelligence",
            url:"https://drive.google.com/drive/folders/1Tl5jsQp58ZaezcM5EUgu047z4zRyLxFp",
    
        },
    
        {
            sub:"Cloud Computing",
            url:"https://drive.google.com/drive/folders/1Tl5jsQp58ZaezcM5EUgu047z4zRyLxFp",
    
        },
    
    
        {
            sub:"Compiler Designed",
            url:"https://drive.google.com/drive/folders/1Tl5jsQp58ZaezcM5EUgu047z4zRyLxFp",
    
        },
    
        {
            sub:"Machine Learning",
            url:"https://drive.google.com/drive/folders/1Tl5jsQp58ZaezcM5EUgu047z4zRyLxFp",
    
        },
    
        {
            sub:"Mobile Application",
            url:"https://drive.google.com/drive/folders/1Tl5jsQp58ZaezcM5EUgu047z4zRyLxFp",
        },
    ]
  return (
    <><div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            previousyear6.map((row,index)=>{
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

export default Previousyear6