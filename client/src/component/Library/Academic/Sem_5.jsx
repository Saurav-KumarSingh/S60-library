import React from 'react'

const Sem_5 = () => {
    const LORDS=[
        {
            sub:"FLAT",
            url:"https://drive.google.com/file/d/1Tdvrc9McKxPRMbScsMAmhKOwrkK9kAZv/view",
    
        },
    
        {
            sub:"CN",
            url:"https://drive.google.com/file/d/1TiPfbnhLmcBKD2HGbVkSQdh8uniyN56-/view",
    
        },
    
        {
            sub:"DBMS",
            url:"https://drive.google.com/file/d/1ltWZLRxxY-227ldlzU4wc1SflHM77rDH/view",
    
        }
    ]
  return (
    <><div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            LORDS.map((row,index)=>{
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

export default Sem_5