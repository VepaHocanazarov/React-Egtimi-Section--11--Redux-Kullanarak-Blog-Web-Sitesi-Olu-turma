import React from 'react'

const About = (props) => {

     console.log(props);

     setTimeout(()=>{
     props.history.push('/about');
     },3000
     )

 
    return (
        <div>
            <div className="container">
                <h4 className="center">About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est consequatur debitis error harum voluptatibus accusantium voluptate laboriosam labore pariatur. Cumque ipsa itaque, autem consequuntur odio aliquam ratione perferendis reprehenderit veniam.</p>
            </div>
        </div>
    )
}

export default About
