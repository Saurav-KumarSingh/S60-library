import React from 'react'

const Sem_3 = () => {
    const LORDS=[
        {
            sub:"OOPs",
            url:"https://drive.google.com/file/d/1HSmQYW_HJdY6HduZhgsyeZW8dlvqsQHQ/view",
    
        },
    
        {
            sub:"DSA",
            url:"https://drive.google.com/file/d/1RdAulJ7C3D9-RjyBLE9_9PHmUE6lisaV/view",
    
        },
    
    
        {
            sub:"M3",
            url:"https://drive.google.com/file/d/1n0wJFRvWqQXaYDLtvhXPdEDPUQdW9FaS/view",
    
        },
    
        {
            sub:"DE",
            url:"https://drive.google.com/file/d/1YUUV5jTrNrkSZSzaJUoNGRYxhCmIcHWZ/view",
    
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

export default Sem_3