import React from 'react'

const Previousyear3 = () => {

    const Previousyear3=[
        {
            sub:"Data Structure and Algorithm",
            url:"https://drive.google.com/drive/folders/1lZkM_WjBwWzP0A6VAj3GqUyl89KvEebJ",
    
        },
    
        {
            sub:"Object Oriented Programmes",
            url:"https://drive.google.com/drive/folders/1lZkM_WjBwWzP0A6VAj3GqUyl89KvEebJ",
    
        },
    
    
        {
            sub:"Development Of Society",
            url:"https://drive.google.com/drive/folders/1lZkM_WjBwWzP0A6VAj3GqUyl89KvEebJ",
    
        },
    
        {
            sub:"Mathametics-3",
            url:"https://drive.google.com/drive/folders/1lZkM_WjBwWzP0A6VAj3GqUyl89KvEebJ",
    
        },
    
        {
            sub:"Digital Electronics",
            url:"https://drive.google.com/drive/folders/1lZkM_WjBwWzP0A6VAj3GqUyl89KvEebJ",
        },
    ]
    

  return (
    <>
    <div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            Previousyear3.map((row,index)=>{
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
    </div>
    </>
  )
}

export default Previousyear3;