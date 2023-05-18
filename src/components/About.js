import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: '#fff',
        backgroundColor: '#000',
        padding: '50px',
        borderRadius: "10px"
    })

    const [myStyle1, setMyStyle1] = useState({
        color: '#fff',
        backgroundColor: '#000',
    })

    const [btn, setBtn] = useState('Enable Light Mode')
    
    const toogleDarkLight = ()=>{
        if(myStyle.color==='#fff' && myStyle1.color ==='#fff'){
            setMyStyle ({
                color: '#000',
                backgroundColor: '#fff',
                padding: '50px',
                borderRadius: "10px"
            })
            setMyStyle1 ({
                color: '#000',
                backgroundColor: '#fff'
            })
            setBtn('Enable Dark Mode')
        }
        else{
            setMyStyle ({
                color: '#fff',
                backgroundColor: '#000',
                padding: '50px',
                borderRadius: "10px"
            })
            setMyStyle1 ({
                color: '#fff',
                backgroundColor: '#000'
            })
            setBtn('Enable Light Mode')

        }
    }
    return (
        <>
            <div className='container my-5'>
                <h1 className='text-center pb-4 text-danger'>About Us</h1>
                <div class="accordion" id="accordionExample" style={myStyle}>
                    <div class="accordion-item" style={myStyle1}>
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle1}>
                                Introduction
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle1}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle1}>
                                Services
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle1}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle1}>
                                Advantages
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button className='btn btn-primary py-2' onClick={toogleDarkLight}>{btn}</button>
            </div>
        </>
    )
}
