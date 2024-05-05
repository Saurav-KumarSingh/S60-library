import React from 'react'

const Previousyear7_8 = () => {

    const Previousyear7and8=[
        {
            sub:"Adhoc And Wireless Sensor Network",
            url:"https://drive.google.com/drive/folders/1IfMVSp3RDrJFB-bpIHEfCbd2A32cgptY",
    
        },
    
        {
            sub:"Data Mining And Datahousing",
            url:"https://drive.google.com/drive/folders/1IfMVSp3RDrJFB-bpIHEfCbd2A32cgptY",
    
        },
    
    
        {
            sub:"Agile Software Development",
            url:"https://drive.google.com/drive/folders/1IfMVSp3RDrJFB-bpIHEfCbd2A32cgptY",
    
        },
    
        {
            sub:"Network Security and Cryptography",
            url:"https://drive.google.com/drive/folders/1IfMVSp3RDrJFB-bpIHEfCbd2A32cgptY",
    
        },
    
      
    ]
  return (
    <><div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            Previousyear7and8.map((row,index)=>{
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

export default Previousyear7_8