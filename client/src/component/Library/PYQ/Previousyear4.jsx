
import React from 'react'
const Previousyear4 = () => {
    const previousyear4 = [
        {
            sub: "Computer Organisation and Architech",
            url: "https://drive.google.com/drive/folders/1xxnZ7y1_bXd7gZD178-onYOQBtn9dZ6I",

        },

        {
            sub: "Data Algorithm and Analysis",
            url: "https://drive.google.com/drive/folders/1xxnZ7y1_bXd7gZD178-onYOQBtn9dZ6I",

        },


        {
            sub: "Discrete Mathametics",
            url: "https://drive.google.com/drive/folders/1xxnZ7y1_bXd7gZD178-onYOQBtn9dZ6I",

        },

        {
            sub: "Operating System",
            url: "https://drive.google.com/drive/folders/1xxnZ7y1_bXd7gZD178-onYOQBtn9dZ6I",

        },

        {
            sub: "Human Value",
            url: "https://drive.google.com/drive/folders/1xxnZ7y1_bXd7gZD178-onYOQBtn9dZ6I",
        },
    ]


    return (
        <>
        <div className='flex flex-wrap gap-6 px-5 py-4'>
        {
                previousyear4.map((row,index)=>{
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

export default Previousyear4