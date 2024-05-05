import React from 'react'

const Previousyear5 = () => {

    const previousyear5=[
        {
            sub:"Computer-Network",
            url:"https://drive.google.com/drive/folders/1FDbe1MhwFzMF4AYEWt1qR9HMQTYdFLXU",
    
        },
    
        {
            sub:"Database Management System",
            url:"https://drive.google.com/drive/folders/1FDbe1MhwFzMF4AYEWt1qR9HMQTYdFLXU",
    
        },
    
    
        {
            sub:"Enterprise Resources Planning",
            url:"https://drive.google.com/drive/folders/1FDbe1MhwFzMF4AYEWt1qR9HMQTYdFLXU",
    
        },
    
        {
            sub:"Softwere Engineering",
            url:"https://drive.google.com/drive/folders/1FDbe1MhwFzMF4AYEWt1qR9HMQTYdFLXU",
    
        },
    
        {
            sub:"Web Technologies",
            url:"https://drive.google.com/drive/folders/1FDbe1MhwFzMF4AYEWt1qR9HMQTYdFLXU",
        },
    ]

  return (
    <>
     <div className='flex flex-wrap gap-6 px-5 py-4'>
        {
                previousyear5.map((row,index)=>{
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

export default Previousyear5