import React from 'react'

const Notes = () => {
    const notes=[
        {
            sub:"C++",
            url:"https://drive.google.com/file/d/1eG5OyyZxfBpRRhebcWxMtbXl11mvAe8t/view",
    
        },
    
        {
            sub:"DSA",
            url:"https://drive.google.com/file/d/1Fbb9Nnlpmk8uuIEcnWb8s3ehNTNU5itJ/view",
    
        },
    
    
        {
            sub:"JAVAScript",
            url:"https://drive.google.com/file/d/1sXkpFbzb6pfUv4iCGR8us3ER_G3sx_4U/view",
    
        },
    
        {
            sub:"JAVA DEVELOPMENT",
            url:"https://drive.google.com/drive/folders/1isgjpugx7HvZqZQMUP9RZMMtDWPaT8a3",
    
        },
    
        {
            sub:"PYTHON",
            url:"https://drive.google.com/drive/folders/1rJRWgeXlcN06oymcarGY3AdN9BZidqhc",
        },
    
        {
            sub:"REACT JS",
            url:"https://drive.google.com/file/d/1utGTtY3kUtoQkR__imxKt9hw1qmLTR4m/view",
    
        },
    ]
  return (
    <><div className='flex flex-wrap gap-6 px-5 py-4'>
    {
            notes.map((row,index)=>{
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

export default Notes