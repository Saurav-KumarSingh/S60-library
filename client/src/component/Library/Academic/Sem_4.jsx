import React from 'react'

const Sem_4 = () => {
    const LORDS=[
        {
            sub:"OS",
            url:"https://drive.google.com/file/d/10kTqTwdqjBlpiMskT5Lvz2NrAYc-CLxe/view",
    
        },
    
        {
            sub:"DM",
            url:"https://drive.google.com/file/d/1KdCtmBtFpO2MXUjzM7loblElPwG0VGT6/view",
    
        },
    
    
        {
            sub:"DAA",
            url:"https://drive.google.com/file/d/1orTsYPB3tQn8uMngKmDvgj_iMud6sJKe/view",
    
        },
    
        {
            sub:"COA",
            url:"https://drive.google.com/file/d/1G-tU1Sxmtqj8u7vcS9W4frKsWhXccSl3/view",
    
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

export default Sem_4