import React from 'react'

const Data = () => {
    const Syllabus=[
        {
           
            sem:"3rd",
            url:"https://drive.google.com/drive/folders/1tyWl-QbUPf_homIE5YBDtt37DiWby_U4",
    
        },
    
        {
           
            sem:"4th",
            url:"https://drive.google.com/drive/folders/1tyWl-QbUPf_homIE5YBDtt37DiWby_U4",
    
        },
    
    
        {
           
            sem:"5th",
            url:"https://drive.google.com/drive/folders/1tyWl-QbUPf_homIE5YBDtt37DiWby_U4",
    
        },
    
        {
           
            sem:"6th",
            url:"https://drive.google.com/drive/folders/1tyWl-QbUPf_homIE5YBDtt37DiWby_U4",
    
        },
    
        {
           
            sem:"7th & 8th",
            url:"https://drive.google.com/drive/folders/1tyWl-QbUPf_homIE5YBDtt37DiWby_U4",
        },
    ]
    
  return (
    <div className='flex flex-wrap gap-6 px-5'>
        {
        Syllabus.map((row,index)=>{
            return (<div key={index} className='w-[75vw] sm:w-[25vw]'>
                <div className="card"><h3 className='p-2'>{row.sem} sem</h3>
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
    </div>
  )
}

export default Data